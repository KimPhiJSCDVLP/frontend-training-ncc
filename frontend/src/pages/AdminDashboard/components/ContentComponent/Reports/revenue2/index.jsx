import React, { useState, useEffect } from "react";
import moment from "moment";
import ColumnChart from "./component/chart/ColumnChart";
import Table from "./component/table/index";
import Calendar from "../../components/calendar";
import Breadcrumb from "../../components/breadcrumbs";
import axios from "axios";
const { Spin, Space } = require("antd");

const enumerateDaysBetweenDates = function (startDate, endDate) {
    var dates = [];
    var currDate = moment(startDate).startOf("day");
    var lastDate = moment(endDate).startOf("day");
    do{
        dates.push(currDate.add(1, "months").clone().format('MM/yyyy'));
    }
    while (currDate.diff(lastDate) < 0)
    return dates;

};

const startOfMonth = moment().clone().startOf("month").format("YYYY-MM-DD");

function ReportRevenue() {
    const [startDate, setStartDate] = useState(startOfMonth);
    const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
    const [data, setDatta] = useState(null);
    const [listDates, setListDates] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          axios
          .get(`/api/admin/report/revenue?start_date=${startDate}&end_date=${endDate}&type=month`)
          .then((res) => {
            const data = res.data;
            setDatta(data.data);
            setListDates(
                enumerateDaysBetweenDates(moment(startDate).add(-1, "d"), moment(endDate).add(1, "d"))
            );
            setLoading(false);
          })
          .catch((error) => console.log(error));
        },2000) 
      }, [startDate, endDate]);


    return (
        <>
        {loading ? (
            <div className="spinLoading">
               <Spin />
             </div>
            ) : (
                <div className="row">
            <Breadcrumb items={["Báo cáo doanh thu tháng"]}>
                <Space>
                    <Calendar
                        name="startDate"
                        picker="month"
                        onChange={(date) =>
                            setStartDate(
                                moment(date, "DD-MM-YYYY").format("YYYY-MM-DD")
                            )
                        }
                        placeholder="Start date"
                        defaultValue={moment().clone().startOf("month")}
                    />
                    <Calendar
                        name="endDate"
                        picker="month"
                        onChange={(date) =>
                            setEndDate(
                                moment(date, "DD-MM-YYYY").format("YYYY-MM-DD")
                            )
                        }
                        placeholder="End date"
                        defaultValue={moment()}
                    />
                </Space>
            </Breadcrumb>
            <div className="col-12">
                <ColumnChart
                    categories={listDates}
                    series={[
                        {
                            name: "Doanh thu",
                            data: Array.isArray(data)
                                ? data.map((item) => item.totalAmount)
                                : [],
                        },
                    ]}
                />
            </div>
            <div className="col-12 mt-4">
                <Table
                    data={Array.isArray(data) ? data : []}
                    listDates={Array.isArray(listDates) ? listDates : []}
                />
            </div>
        </div>
            )
        }
        </>
    );
}

export default ReportRevenue;
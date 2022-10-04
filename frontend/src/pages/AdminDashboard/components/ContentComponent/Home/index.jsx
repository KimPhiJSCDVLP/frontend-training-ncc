import React from 'react'
import {Col, Row , Spin} from "antd";
import { useEffect, useState } from "react";
import {
  DollarCircleOutlined,
  HddFilled,
  UserSwitchOutlined,
  FormOutlined,
} from "@ant-design/icons";
import moment from "moment"
import axios from 'axios';
import CardOverview from './components/CardOverview';
import ColumnChart from './components/Chart/ColumnChart'
const enumerateDaysBetweenDates = function (startDate, endDate) {
  var dates = [];
  var currDate = moment(startDate).startOf("day");
  var lastDate = moment(endDate).startOf("day");
  while (currDate.add(1, "days").diff(lastDate) < 0) {
    dates.push(currDate.clone().toDate());
  }
  return dates;
};

const startOfMonth = moment()
  .clone()
  .startOf("month")
  .format("YYYY-MM-DD hh:mm");
const listDates = enumerateDaysBetweenDates(
  moment(startOfMonth).add(-1, "d"),
  moment().add(1, "d")
).map((item) => moment(item).format("DD/MM/YYYY"));
export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
      .get("/api/admin/report/overview")
      .then((res) => {
        const data = res.data;
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    },2000) 
  }, []);
  return (
    <>
    {loading ? (
            <div className="spinLoading">
               <Spin />
             </div>
            ) : (
              <div className="site-card-wrapper">
              <>
                <Row gutter={16}>
                  <Col span={6}>
                    <CardOverview
                      title={"Doanh thu"}
                      icon={
                        <DollarCircleOutlined
                          style={{ fontSize: 30, color: "#16a085" }}
                        />
                      }
                      total={ (data?.totalDiscount ? data.totalDiscount.toLocaleString() : 0) + " đ"}
                    />
                  </Col>
                  <Col span={6}>
                    <CardOverview
                      title={"Sản phẩm"}
                      icon={<HddFilled style={{ fontSize: 30, color: "#2980b9" }} />}
                      total={data?.countProduct}
                    />
                  </Col>
                  <Col span={6}>
                    <CardOverview
                      title={"Đơn hàng"}
                      icon={
                        <FormOutlined  style={{ fontSize: 30, color: "#2980b9" }} />
                      }
                      total={data?.countNewOrder}
                    />
                  </Col>
                  <Col span={6}>
                    <CardOverview
                      title={"Khách hàng"}
                      icon={
                        <UserSwitchOutlined
                          style={{ fontSize: 30, color: "#27ae60" }}
                        />
                      }
                      total={data?.countNewCustomer}
                    />
                  </Col>
                </Row>
                <div className="row mt-5">
                  <div className="col-6">
                    <ColumnChart
                      categories={listDates}
                      series={[
                        {
                          name: "Doanh thu",
                          data: data?.totalAmount ? data.totalAmount.map(item => item.total ) : [],
                        }
                      ]}
                    />
                  </div>
                </div>
              </>
          </div>
            )}
 
    </>
    
  )
}

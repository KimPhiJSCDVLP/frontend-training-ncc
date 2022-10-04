import ProductManage from "./components/ContentComponent/ProductManage/productmanage";
import {
    ShoppingCartOutlined,
    SkinOutlined,
    BookOutlined,
    ContactsOutlined,
    UsergroupAddOutlined,
    DashboardOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import Home from "./components/ContentComponent/Home";
import CategoryManage from "./components/ContentComponent/CategoryManage/category";
import ReportRevenue from "./components/ContentComponent/Reports/revenue";
import ReportRevenue2 from "./components/ContentComponent/Reports/revenue2"
import ReportRevenue3 from "./components/ContentComponent/Reports/revenue3"
import ReportCustomer from "./components/ContentComponent/Reports/customer"
const routes = [
    {
        path : "home",
        title : "Home",
        icon: <DashboardOutlined />,
        component: Home,
    },
    {
        path : "report",
        title : "Báo Cáo",
        icon: <PieChartOutlined />,
        childs: [
            {
                title: "Báo cáo doanh thu",
                path: "revenue",
                component: ReportRevenue,
            },
            {
                title: "Báo cáo doanh thu (tháng)",
                path: "revenue2",
                component: ReportRevenue2,
            },
            {
                title: "Báo cáo doanh thu (năm)",
                path: "revenue3",
                component: ReportRevenue3,
            },
            {
                path: "customer",
                title: "Báo cáo khách hàng",
                component: ReportCustomer,
            },
            // {
            //     path: "product",
            //     title: "Báo cáo sản phẩm",
            //     component: ReportProduct,
            // },
        ],
    },
    {
        path : "product",
        title : "Sản Phẩm",
        icon: <DashboardOutlined />,
        component: ProductManage,
    },
    {
        path : "category",
        title : "Danh Mục",
        icon: <BookOutlined />,
        component: CategoryManage,
    },

]
export default routes;
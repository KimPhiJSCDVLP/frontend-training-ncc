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

const routes = [
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
        component: ProductManage,
    },

]
export default routes;
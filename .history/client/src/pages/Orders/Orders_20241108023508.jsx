import * as React from "react";
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
} from "@table-library/react-table-library/table";
import { usePagination } from "@table-library/react-table-library/pagination";
import { Heading } from "../../components/Components";
import { thumb1, thumb2, thumb3 } from "../../assets";
import ProductDes from "../../components/ProductDes/ProductDes";

const Orders = () => {
    const LIMIT = 6;
    const dummyData = [
        {
            id: 1,
            date: new Date("2023-12-01"),
            category: "Electronics",
            status: "Delivered",
            quantity: 3,
            totalPrice: "$300",
            details: {
                imageUrl: thumb1,
                customerName: "John Doe",
                description: "High-quality electronic gadget.",
                price: "$100",
                quantity: 3,
                totalPrice: "$300",
            },
        },
        {
            id: 2,
            date: new Date("2023-11-15"),
            category: "Clothing",
            status: "Pending",
            quantity: 2,
            totalPrice: "$80",
            details: {
                imageUrl: thumb2,
                customerName: "Jane Smith",
                description: "Stylish and comfortable clothing.",
                price: "$40",
                quantity: 2,
                totalPrice: "$80",
            },
        },
        {
            id: 3,
            date: new Date("2023-10-20"),
            category: "Home Goods",
            status: "Shipped",
            quantity: 5,
            totalPrice: "$150",
            details: {
                imageUrl: thumb3,
                customerName: "Alice Johnson",
                description: "Durable and stylish home essentials.Durable and stylish home essentials. Durable and stylish home essentials. Durable and stylish home essentials. Durable and stylish home essentials. Durable and stylish home essentials. Durable and stylish home essentials.Durable and stylish home essentials.Durable and stylish home essentials.Durable and stylish home essentials.Durable and stylish home essentials.Durable and stylish home essentials.Durable and stylish home essentials.",
                price: "$30",
                quantity: 5,
                totalPrice: "$150",
            },
        },
        {
            id: 4,
            date: new Date("2023-12-10"),
            category: "Books",
            status: "Delivered",
            quantity: 2,
            totalPrice: "$40",
            details: {
                imageUrl: thumb1,
                customerName: "Robert Brown",
                description: "Collection of best-selling novels.",
                price: "$20",
                quantity: 2,
                totalPrice: "$40",
            },
        },
        {
            id: 5,
            date: new Date("2023-12-05"),
            category: "Toys",
            status: "Pending",
            quantity: 4,
            totalPrice: "$120",
            details: {
                imageUrl: thumb2,
                customerName: "Lucy Green",
                description: "Fun and educational toys for kids.",
                price: "$30",
                quantity: 4,
                totalPrice: "$120",
            },
        },
        {
            id: 6,
            date: new Date("2023-11-25"),
            category: "Furniture",
            status: "Shipped",
            quantity: 1,
            totalPrice: "$250",
            details: {
                imageUrl: thumb3,
                customerName: "Tom Davis",
                description: "Modern and stylish furniture.",
                price: "$250",
                quantity: 1,
                totalPrice: "$250",
            },
        },
        {
            id: 7,
            date: new Date("2023-11-18"),
            category: "Appliances",
            status: "Pending",
            quantity: 2,
            totalPrice: "$500",
            details: {
                imageUrl: thumb1,
                customerName: "Sara Wilson",
                description: "Latest home appliances.",
                price: "$250",
                quantity: 2,
                totalPrice: "$500",
            },
        },
        {
            id: 8,
            date: new Date("2023-10-30"),
            category: "Gadgets",
            status: "Delivered",
            quantity: 3,
            totalPrice: "$450",
            details: {
                imageUrl: thumb2,
                customerName: "Chris Lee",
                description: "Advanced technology gadgets.",
                price: "$150",
                quantity: 3,
                totalPrice: "$450",
            },
        },
        {
            id: 9,
            date: new Date("2023-11-03"),
            category: "Accessories",
            status: "Pending",
            quantity: 5,
            totalPrice: "$75",
            details: {
                imageUrl: thumb3,
                customerName: "Megan White",
                description: "Fashionable accessories.",
                price: "$15",
                quantity: 5,
                totalPrice: "$75",
            },
        },
        {
            id: 10,
            date: new Date("2023-12-03"),
            category: "Stationery",
            status: "Shipped",
            quantity: 10,
            totalPrice: "$50",
            details: {
                imageUrl: thumb1,
                customerName: "Anna Black",
                description: "Stationery items for school.",
                price: "$5",
                quantity: 10,
                totalPrice: "$50",
            },
        },
    ];

    const [data] = React.useState({
        nodes: dummyData,
    });
    const [modalData, setModalData] = React.useState(null);

    const pagination = usePagination(
        data,
        {
            state: {
                page: 0,
                size: LIMIT,
            },
            onChange: onPaginationChange,
        },
        {
            isServer: true,
        }
    );

    const sizes = [6, 10, 14];
    const totalPages = Math.ceil(dummyData.length / pagination.state.size);

    const tableList = dummyData.slice(
        pagination.state.page * pagination.state.size,
        (pagination.state.page + 1) * pagination.state.size
    );

    function onPaginationChange(action, state) {
        // Handle pagination change here
    }

    return (
        <div className="w-full px-4 md:px-8 lg:px-12 py-10 bg-gray-100">
            <Heading title="Orders" sub1="Home" sub2="Orders" />
            <Table
                data={{ nodes: tableList }}
                pagination={pagination}
                className="rounded-md shadow-md mt-10 w-full overflow-x-auto"
            >
                {(tableList) => (
                    <>
                        <Header>
                            <HeaderRow>
                                <HeaderCell className="border-b border-gray-300">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">ID</div>
                                </HeaderCell>
                                <HeaderCell className="border-b border-gray-300 hidden md:table-cell">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">Date</div>
                                </HeaderCell>
                                <HeaderCell className="border-b border-gray-300 hidden md:table-cell">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">Category</div>
                                </HeaderCell>
                                <HeaderCell className="border-b border-gray-300">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">Status</div>
                                </HeaderCell>
                                <HeaderCell className="border-b border-gray-300">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">Quantity</div>
                                </HeaderCell>
                                <HeaderCell className="border-b border-gray-300 hidden md:table-cell">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">Total Price</div>
                                </HeaderCell>
                                <HeaderCell className="border-b border-gray-300">
                                    <div className="bg-bgsecondary px-2 py-3 md:px-4 md:py-5 text-center">Details</div>
                                </HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {tableList.map((item) => (
                                <Row item={item} key={item.id} className="border-b border-gray-300">
                                    <Cell>
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">{item.id}</div>
                                    </Cell>
                                    <Cell className="hidden md:table-cell">
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">{item.date.toLocaleDateString()}</div>
                                    </Cell>
                                    <Cell className="hidden md:table-cell">
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">{item.category}</div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">{item.status}</div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">{item.quantity}</div>
                                    </Cell>
                                    <Cell className="hidden md:table-cell">
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">{item.totalPrice}</div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-2 py-3 md:px-4 md:py-4 text-center">
                                            <button
                                                className="text-blue-500 underline"
                                                onClick={() => setModalData(item.details)}
                                            >
                                                View
                                            </button>
                                        </div>
                                    </Cell>
                                </Row>
                            ))}
                        </Body>
                    </>
                )}
            </Table>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-4 py-4 bg-white rounded-md shadow-md space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <span>Page Size:</span>
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className={`px-3 py-1 rounded-md ${pagination.state.size === size ? "bg-primary text-white font-bold" : "bg-gray-200 text-gray-800"}`}
                            onClick={() => pagination.fns.onSetSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                    <button
                        className={`px-3 py-1 rounded-md ${pagination.state.size === dummyData.length ? "bg-primary text-white font-bold" : "bg-gray-200 text-gray-800"}`}
                        onClick={() => pagination.fns.onSetSize(dummyData.length)}
                    >
                        All
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Page:</span>
                    {Array(totalPages)
                        .fill()
                        .map((_, index) => (
                            <button
                                key={index}
                                className={`px-3 py-1 rounded-md ${pagination.state.page === index ? "bg-primary text-white font-bold" : "bg-gray-200 text-gray-800"}`}
                                onClick={() => pagination.fns.onSetPage(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                </div>
            </div>

            {modalData && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-bgsecondary bg-opacity-50 p-4">
                    <ProductDes
                        customerName={modalData.customerName}
                        description={modalData.description}
                        imageUrl={modalData.imageUrl}
                        price={modalData.price}
                        totalPrice={modalData.totalPrice}
                        quantity={modalData.quantity}
                        onClick={() => setModalData(null)}
                    />
                </div>
            )}
        </div>
    );
};

export default Orders;



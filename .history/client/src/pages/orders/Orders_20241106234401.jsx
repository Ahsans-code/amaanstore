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
import dummyData from './OrdersData'

const Orders = () => {
    const LIMIT = 6;

    

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
            <Heading title={'Orders'} sub1={'Home'} sub2={'Orders'} />
            <Table data={{ nodes: tableList }} pagination={pagination} className="rounded-md shadow-md mt-10 w-full">
                {(tableList) => (
                    <>
                        <Header>
                            <HeaderRow className="">
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">ID</div></HeaderCell>
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">Date</div></HeaderCell>
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">Category</div></HeaderCell>
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">Status</div></HeaderCell>
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">Quantity</div></HeaderCell>
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">Total Price</div></HeaderCell>
                                <HeaderCell className="border-b border-gray-300 "><div className="bg-bgsecondary px-4 py-5">Details</div></HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {tableList.map((item) => (
                                <Row item={item} key={item.id} className="border-b border-gray-300">
                                    <Cell><div className="px-4 py-4">{item.id}</div></Cell>
                                    <Cell><div className="px-4 py-4">{item.date.toLocaleDateString()}</div></Cell>
                                    <Cell><div className="px-4 py-4">{item.category}</div></Cell>
                                    <Cell><div className="px-4 py-4">{item.status}</div></Cell>
                                    <Cell><div className="px-4 py-4">{item.quantity}</div></Cell>
                                    <Cell><div className="px-4 py-4">{item.totalPrice}</div></Cell>
                                    <Cell>
                                        <div className="px-4 py-4">
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

            <div className="flex justify-between items-center mt-4 px-2 py-4 bg-white rounded-md shadow-md">
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
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-lg font-bold mb-4">{modalData.customerName}'s Order Details</h2>
                        <img src={modalData.imageUrl} alt="Product" className="mb-4" />
                        <p><strong>Description:</strong> {modalData.description}</p>
                        <p><strong>Price:</strong> {modalData.price}</p>
                        <p><strong>Quantity:</strong> {modalData.quantity}</p>
                        <p><strong>Total Price:</strong> {modalData.totalPrice}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                            onClick={() => setModalData(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;

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

const Orders = () => {
    const LIMIT = 2;

    // Dummy data for the table
    const dummyData = [
        {
            id: 1,
            name: "Order #1",
            deadline: new Date("2023-12-01"),
            type: "Electronics",
            isComplete: true,
            nodes: [{}, {}, {}],
        },
        {
            id: 2,
            name: "Order #2",
            deadline: new Date("2023-11-15"),
            type: "Clothing",
            isComplete: false,
            nodes: [{}],
        },
        {
            id: 3,
            name: "Order #3",
            deadline: new Date("2023-11-20"),
            type: "Home Goods",
            isComplete: false,
            nodes: [{}, {}, {}, {}],
        },
        {
            id: 4,
            name: "Order #4",
            deadline: new Date("2023-12-10"),
            type: "Books",
            isComplete: true,
            nodes: [{}, {}],
        },
        {
            id: 5,
            name: "Order #5",
            deadline: new Date("2023-12-05"),
            type: "Toys",
            isComplete: true,
            nodes: [{}],
        },
    ];

    const [data] = React.useState({
        nodes: dummyData,
    });

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

    function onPaginationChange(action, state) {
        // Pagination changes are handled here
    }

    const sizes = [1, 2, 5];
    const totalPages = Math.ceil(dummyData.length / pagination.state.size);

    // Get data for the current page by slicing the array
    const tableList = dummyData.slice(
        pagination.state.page * pagination.state.size,
        (pagination.state.page + 1) * pagination.state.size
    );

    return (
        <div className="w-full px-8 py-4 bg-gray-100">
            <Heading title={'Orders'} sub1={'Home'} sub2={'Ordres'}/>
            <Table data={{ nodes: tableList }} pagination={pagination} className={'rounded-md shadow-md mt-10'}>
                {(tableList) => (
                    <>
                        <Header>
                            <HeaderRow className="bg-gray-200">
                                <HeaderCell className=" border-b border-gray-300"><div className=" px-4 py-5 bg-bgsecondary">Task</div></HeaderCell>
                                <HeaderCell className=" border-b border-gray-300"><div className=" px-4 py-5 bg-bgsecondary">Deadline</div></HeaderCell>
                                <HeaderCell className=" border-b border-gray-300"><div className=" px-4 py-5 bg-bgsecondary">Type</div></HeaderCell>
                                <HeaderCell className=" border-b border-gray-300"><div className="py-5 bg-bgsecondary">Complete</div></HeaderCell>
                                <HeaderCell className=" border-b border-gray-300"><div className="py-5 bg-bgsecondary">Tasks</div></HeaderCell>
                            </HeaderRow>
                        </Header>

                        <Body>
                            {tableList.map((item) => (
                                <Row item={item} key={item.id} className="border-b border-gray-300">
                                    <Cell>
                                        <div className="px-4 py-4 border-b-[1px]">{item.name}</div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-4 py-4 border-b-[1px]">
                                            {item.deadline.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "2-digit",
                                                day: "2-digit",
                                            })}
                                        </div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-4 py-4 border-b-[1px]">{item.type}</div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-4 py-4 border-b-[1px]">{item.isComplete.toString()}</div>
                                    </Cell>
                                    <Cell>
                                        <div className="px-4 py-4 border-b-[1px]">{item.nodes?.length}</div>
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
                            type="button"
                            className={`px-3 py-1 rounded-md ${pagination.state.size === size ? "bg-primary text-white font-bold" : "bg-gray-200 text-gray-800"}`}
                            onClick={() => pagination.fns.onSetSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                    <button
                        type="button"
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
                                type="button"
                                className={`px-3 py-1 rounded-md ${pagination.state.page === index ? "bg-primary text-white font-bold" : "bg-gray-200 text-gray-800"}`}
                                onClick={() => pagination.fns.onSetPage(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;

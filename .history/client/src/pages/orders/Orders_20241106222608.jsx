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

  const [data, setData] = React.useState({
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
    // No need to fetch data; just update pagination state
  }

  const sizes = [1, 2, 5];

  return (
    <>
      <Table data={data} pagination={pagination}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Task</HeaderCell>
                <HeaderCell>Deadline</HeaderCell>
                <HeaderCell>Type</HeaderCell>
                <HeaderCell>Complete</HeaderCell>
                <HeaderCell>Tasks</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row item={item} key={item.id}>
                  <Cell>{item.name}</Cell>
                  <Cell>
                    {item.deadline.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </Cell>
                  <Cell>{item.type}</Cell>
                  <Cell>{item.isComplete.toString()}</Cell>
                  <Cell>{item.nodes?.length}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <span>
          Page Size:{" "}
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              style={{
                fontWeight: pagination.state.size === size ? "bold" : "normal",
              }}
              onClick={() => pagination.fns.onSetSize(size)}
            >
              {size}
            </button>
          ))}
          <button
            type="button"
            style={{
              fontWeight:
                pagination.state.size === dummyData.length ? "bold" : "normal",
            }}
            onClick={() => pagination.fns.onSetSize(dummyData.length)}
          >
            All
          </button>
        </span>

        <span>
          Page:{" "}
          {Array(Math.ceil(dummyData.length / pagination.state.size))
            .fill()
            .map((_, index) => (
              <button
                key={index}
                type="button"
                style={{
                  fontWeight:
                    pagination.state.page === index ? "bold" : "normal",
                }}
                onClick={() => pagination.fns.onSetPage(index)}
              >
                {index + 1}
              </button>
            ))}
        </span>
      </div>
    </>
  );
};

export default Orders;

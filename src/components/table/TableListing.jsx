import React, { Component } from "react";
import TableWraper from "./TableWraper";

const TableListing = (tableProp) => (WrappedComponent) =>
  class TableListingHOC extends Component {
    componentDidMount() {}
    componentWillReceiveProps(nextProps) {}

    render() {
      const { disablePagination } = this.props;
      const { columns, noAction } = tableProp;
      const data = {
        data: [],
        isLoading: true,
        pagination: {
          currentPage: 1,
          lastPage: 10,
          count: 100,
          recordPerPage: 10,
        },
      };
      const column = columns(this.props);

      //   const finalColumn = noAction ? column : column.concat(actionColumn);

      return (
        <>
          <TableWraper
            data={data}
            name={"List Film"}
            columns={column}
            page={data.pagination.currentPage}
            sizePerPage={data.pagination.recordPerPage}
            totalSize={data.pagination.count}
            // onTableChange={this.handleTableChange}
            // onTableSearch={this.handleSearch}
            disablePagination={disablePagination}
            customAction={
              <WrappedComponent {...this.props} state={this.state} />
            }
            // route={route}
            // onPageChange={this.onPageChange}
          />
        </>
      );
    }
  };

export default TableListing;

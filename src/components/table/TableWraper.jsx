import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import overlayFactory from "react-bootstrap-table2-overlay";
import paginationFactory, {
  PaginationProvider,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";

const TableWraper = ({
  name,
  data,
  page,
  sizePerPage,
  onPageChange,
  totalSize,
  columns,
  disablePagination,
}) => (
  <PaginationProvider
    pagination={paginationFactory({
      custom: true,
      page,
      paginationSize: 3,
      sizePerPage,
      totalSize,
      alwaysShowAllBtns: true,
      withFirstAndLast: false,
    })}
  >
    {({ paginationProps, paginationTableProps }) => (
      <>
        {/* <HeaderTable
          name={"List FIlm"}
            disableSearch={disableSearch}
            disableCreate={disableCreate}
            disableFilter={disableFilter}
            onTableSearch={onTableSearch}
            handleStatus={handleStatus}
            handleDate={handleDate}
        /> */}
        <div className="table-responsive table-ui wrapper-table">
          <BootstrapTable
            remote
            keyField="id"
            striped
            data={data.data}
            columns={columns}
            // defaultSorted={defaultSorted}
            bordered={false}
            loading={data.isLoading}
            // onTableChange={onTableChange}
            noDataIndication={() => (
              <div className="text-center">Empty Data</div>
            )}
            overlay={overlayFactory({
              spinner: true,
              // background: 'rgba(192,192,192,0.3)'
              styles: {
                overlay: (base) => ({
                  ...base,
                  background: "rgba(192,192,192,0.3)",
                }),
              },
            })}
            {...paginationTableProps}
          />
        </div>
        {!disablePagination && totalSize > 0 && (
          <div className="d-flex align-items-center justify-content-end my-3">
            <span className="mr-3">
              <PaginationTotalStandalone {...paginationProps} />
            </span>
            <PaginationListStandalone
              {...paginationProps}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </>
    )}
  </PaginationProvider>
);

export default TableWraper;

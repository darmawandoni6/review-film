import React, { Component } from "react";
import TableListing from "../../../components/table/TableListing";

class ListFilmTabel extends Component {
  static columns = () => {
    const columns = [
      {
        dataField: "name",
        text: "Film",
        sort: true,
      },
      {
        dataField: "email",
        text: "Type",
        sort: true,
      },
      {
        dataField: "created_at",
        text: "Tanggal Rilis",
        sort: true,
      },
      {
        dataField: "updated_at",
        text: "Rating",
        sort: true,
      },
    ];
    return columns;
  };

  render() {
    return <div />;
  }
}

export default TableListing({
  columns: ListFilmTabel.columns,
})(ListFilmTabel);

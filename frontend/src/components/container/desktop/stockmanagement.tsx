// Importing modules
import * as React from "react";

// Importing UI components
import AdminSideMenu from "../../ui/desktop/sidemenu";
import StockFilter from "../../ui/desktop/stockfilter";

// Importing interfaces
import { ActiveSpecialFilter, IPureCategoryWithoutFlux } from "src/modules";
import PageHeader from "../../ui/desktop/pageheader";

interface IStockManagementProps {
  itemlist: IPureCategoryWithoutFlux[];
}

interface IStockManagementState {
  category: string;
  isActive: ActiveSpecialFilter;
  isSpecial: ActiveSpecialFilter;
}

export default class StockManagement extends React.Component<
  IStockManagementProps,
  IStockManagementState
> {
  constructor(props: IStockManagementProps) {
    super(props);

    this.state = {
      category: "all",
      isActive: "all",
      isSpecial: "all"
    };
  }

  public render() {
    return (
      <div className="desktop-page-container">
        <AdminSideMenu />
        <div className="page-container-center">
          <PageHeader header="Stock Management" />
        </div>
        <StockFilter />
      </div>
    );
  }
}

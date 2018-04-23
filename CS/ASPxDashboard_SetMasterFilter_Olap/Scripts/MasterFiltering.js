function initializeFilters() {
    function applyFilters() {
        var orderDateQ42001 = ['[Date].[Calendar Year].&[2001]', '[Date].[Calendar Quarter of Year].&[CY Q4]'];
        var orderDateQ12002 = ['[Date].[Calendar Year].&[2002]', '[Date].[Calendar Quarter of Year].&[CY Q1]'];
        if (webDashboard.CanSetMasterFilter("cardDashboardItem1")) {
            webDashboard.SetMasterFilter("cardDashboardItem1", [orderDateQ42001, orderDateQ12002]);
        }
    }

    function clearFilters() {
        if (webDashboard.CanClearMasterFilter("cardDashboardItem1")) {
            webDashboard.ClearMasterFilter("cardDashboardItem1");
        }
    }

    $("#setMasterFilterButton").dxButton({
        text: "Apply Filter",
        onClick: applyFilters

    });
    $("#clearMasterFilterButton").dxButton({
        text: "Clear Filter",
        onClick: clearFilters
    });
};
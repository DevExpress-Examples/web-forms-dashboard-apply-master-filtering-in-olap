var dashboardControl;
var viewerApiExtension;

function onBeforeRender(s) {
    dashboardControl = s.GetDashboardControl();
    viewerApiExtension = dashboardControl.findExtension('viewerApi');
    if (dashboardControl)
        dashboardControl.on('dashboardEndUpdate', initializeControls);
}

function initializeControls() {
    $("#setMasterFilterButton").dxButton({
        text: "Apply Filter",
        onClick: applyFilters

    });
    $("#clearMasterFilterButton").dxButton({
        text: "Clear Filter",
        onClick: clearFilters
    });
};

function applyFilters() {
    var orderDateQ42001 = ['[Date].[Calendar Year].&[2001]', '[Date].[Calendar Quarter of Year].&[CY Q4]'];
    var orderDateQ12002 = ['[Date].[Calendar Year].&[2002]', '[Date].[Calendar Quarter of Year].&[CY Q1]'];
    if (viewerApiExtension.canSetMasterFilter("cardDashboardItem1")) {
        viewerApiExtension.setMasterFilter("cardDashboardItem1", [orderDateQ42001, orderDateQ12002]);
    }
}

function clearFilters() {
    if (viewerApiExtension.canClearMasterFilter("cardDashboardItem1")) {
        viewerApiExtension.clearMasterFilter("cardDashboardItem1");
    }
}
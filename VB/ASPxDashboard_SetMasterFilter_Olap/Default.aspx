<%@ Page Language="VB" AutoEventWireup="true" CodeBehind="Default.aspx.vb" 
    Inherits="ASPxDashboard_SetMasterFilter_Olap.Default" %>

<%@ Register Assembly="DevExpress.Dashboard.v21.2.Web.WebForms, Version=21.2.11.0, Culture=neutral, PublicKeyToken=b88d1754d700e49a" 
    Namespace="DevExpress.DashboardWeb" TagPrefix="dx" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="Scripts/MasterFiltering.js"></script>
</head>
<body>
    <form id="form1" runat="server">

    <div id="setMasterFilterButton" style="float: left; margin-left: 10px;"></div>
    <div id="clearMasterFilterButton" style="float: left; margin-left: 15px;"></div>

    <div style="position: absolute; left: 0; right: 0; top:50px; bottom:0;">
        <dx:ASPxDashboard ID="ASPxDashboard1" runat="server" 
            WorkingMode="Viewer" 
            ClientInstanceName="webDashboard"
            ClientSideEvents-BeforeRender="onBeforeRender" 
            Width="100%" Height="100%"></dx:ASPxDashboard>
    </div>
    </form>
</body>
</html>


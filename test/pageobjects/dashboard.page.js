
class Dashboard {

    get userDropdown () {
        return $('.filament-dropdown');
    }
    get logoutButton () {return $("[action] button")}

    get dashboardButton() {return $("Dashboard")}
}

export default new Dashboard();
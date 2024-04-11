
class Dashboard {

    get userDropdown () {
        return $('.filament-dropdown');
    }
    get logoutButton () {return $("[action] button")}
}

export default new Dashboard();
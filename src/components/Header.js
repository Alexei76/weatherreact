import React from 'react';
export function Header(){
return (
    <header className="header">
    <span>Weather App</span>
    <CitySelector selectedCity={props.selectedCity} getSelectedCity={props.getSelectedCity} />
    <nav className="navigation">
        <ul>
            <li id="index">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li id="list">
                <NavLink exact activeClassName="active" to="/list">Cities List</NavLink>
            </li>
            <li id="about">
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
</header>
    )
}
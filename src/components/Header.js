import React from 'react';
export function Header(){
return (
    <header className="header">
<span>Weather App.</span>
<nav className="navigation">
<ul>
<li id="index"><a href="index.html">Home</a></li>
<li id="list"><a href="list.html">Cities List</a></li>
<li id="about"><a href="about.html">About</a></li>
</ul>
</nav>

</header>
    )
}
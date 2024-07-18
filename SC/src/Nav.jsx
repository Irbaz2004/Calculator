import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-dark rounded-5 shadow-sm m-2" id="pillNav2" role="tablist" style={{ '--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-dark)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)' }}>
        <li className="nav-item" role="presentation">
          <NavLink to="/">
            <button className="nav-link active rounded-5 fw-bold fs-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Simple Calculator</button>
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink to="/bdm">
            <button className="nav-link rounded-5 fw-bold fs-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">BMI Calculator</button>
          </NavLink>
        </li>
        <li className="nav-item me-2" role="presentation">
          <NavLink to="/temperature">
            <button className="nav-link rounded-5 fw-bold fs-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Temperature Calculator</button>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

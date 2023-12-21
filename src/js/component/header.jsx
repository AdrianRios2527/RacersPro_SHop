import React from "react";

export const Header = () => {
  return (
    <div className="">
    <div className="">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Racer Gas
                <br />
                <span className="fs-6">Let the good times to roll</span>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">
                        Motorbikes
                    </a>
                    <a className="nav-link active" aria-current="page" href="#">
                        Helmet
                    </a>
                    <a className="nav-link active" aria-current="page" href="#">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </nav>
</div>

    <div className="d-flex justify-content-around bg-dark">
        <a href="#" class="badge badge-info">
          Info
        </a>
        <a href="#" class="badge badge-info">
          Info
        </a>
        <a href="#" class="badge badge-info">
          Info
        </a>
      </div>
    
</div>

      
  );
};

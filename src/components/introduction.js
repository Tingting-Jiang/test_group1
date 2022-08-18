import React from "react";
import icon from './Videos/logo192.png';

const Introduction =({
    authorItem = {
      name: "Author name",
      handle: "California",
      description: "The ASICS Gel Kayano 29 returns and continues on its legacy as a cushioned stability shoe with an even softer underfoot expierence. Featuring a new Blast+ midsole and adaptive LITE TRUSS system, the Kayano 29 offers a substantial upgrade that fans of the series will continue to bring out for a wide variety of daily training."
    },
  }) => {
    return (
        <>
        <div className="row ms-0 me-1 text-nowrap ">
            <div className="col-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1 d-flex align-self-center ps-0 pe-0 img-bg">
                <img
                    src={icon}
                    alt=''
                    width="48px"
                    className="rounded-circle float-start"
                />
            </div>

            <div className="col-7 col-md-9 col-lg-9 col-xl-9 col-xxl-9 ps-1">
                <div className="fw-bold mb-0">
                    {authorItem.name}
                </div>

            <div className="d-flex">@{authorItem.handle}</div>
            </div>

            <div className="col-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 ps-0 align-self-center d-grid">
            <button className="btn rounded-pill btn-primary ">Follow</button>
            </div>
        </div>
        <div class="fs-6 overflow-scroll" >{authorItem.description}</div>
        </>
    )
};

export default Introduction;

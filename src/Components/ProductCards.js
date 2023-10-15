import ProductDetails from "./ProductDetails.json"
import Ratings from "./Ratings";
import { useState } from "react";

export default function MainSection(props) {

    const [cartAdd, setCartAdd] = useState([])
    console.log(props)

    const cartButton = (id) => {
        console.log(cartAdd)
        if (cartAdd.includes(id)) {
            props.remove()
            setCartAdd(cartAdd.filter((a) => a !== id))
        }
        else {
            props.add()
            setCartAdd([...cartAdd, id])
        }
    }

 
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {ProductDetails.details.map((ele) => (
                        <div className="col mb-5" key={ele.id}>
                            <div className="card h-100">
                                {ele.badge ? (
                                    <div
                                        className="badge bg-dark text-white position-absolute"
                                        style={{ top: "0.5rem", right: "0.5rem" }}
                                    >
                                        Sale
                                    </div>
                                ) : (
                                    ""
                                )}
                                <img
                                    className="card-img-top"
                                    src={ele.image}
                                    alt="Product Image"
                                />

                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{ele.title}</h5>
                                        {ele.rating > 0 ? (
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <Ratings />
                                            </div>
                                        ) : (
                                            ""
                                        )}

                                        {ele.discountPrice ? (
                                            <>
                                            <span className="text-muted text-decoration-line-through mx-1">{ele.price}</span>
                            {ele.discountPrice}
                                            </>
                                           
                                        ) : (
                                            <>{ele.price}
                                            </>
                                        )}
                                        
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">

                                        {ele.btnText === "View Options" ? (
                                            <button className="btn btn-outline-secondary">
                                                {ele.btnText}
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-outline-secondary"
                                                onClick={() => cartButton(ele.id)}
                                            >
                                                {cartAdd.includes(ele.id) ? "Remove from Cart" : ele.btnText}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
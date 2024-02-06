import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import classes from "../modules/Categories.module.scss";

export const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={classes['categories-wrapper']}>
            <nav>
                <ul>
                    {categories.map(function(category, index) {
                        return (
                            <Link to={'/'} key={index}>
                                <li>
                                    {category}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}
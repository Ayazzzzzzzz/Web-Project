// Properties.jsx
import React from "react";
import SearchBar from '../../components/SearchBar/SearchBar';
import './Properties.css';
import useProperties from '../../hooks/useProperties'; // Correct the path based on your project structure
import { PuffLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Properties = () => {
    const { data, isError, isLoading } = useProperties();

    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader
                    size={80} // Use 'size' instead of height, width, and radius
                    color="#4066ff"
                    aria-label="puff-loading"
                />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="wrapper">
                <span>Error while fetching data</span>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="flexColCenter paddings innerWidth properties-container">
                <SearchBar /*filter={filter} setFilter={setFilter}*/ />
            </div>
            <div className="paddings flexCenter properties">
                {data.map((card, i) => (
                    <PropertyCard card={card} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Properties;

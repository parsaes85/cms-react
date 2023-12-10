import React, { useEffect, useState } from "react";

import DataTable from "../../components/DataTable/DataTable";
import TableProductRow from "../../components/TableProductRow/TableProductRow";
import AddNewProductForm from "../../components/AddNewProductForm/AddNewProductForm";
import ProductContext from "../../contexts/productContext";

export default function Products() {
  const mainUrl = "http://localhost:8000/api";

  const [flag, setFlag] = useState(false);
  const [products, setProducts] = useState([]);
  const [mainProductInfo, setMainProductInfo] = useState({});

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch(`${mainUrl}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <ProductContext.Provider value={{
        getAllProducts,
        mainProductInfo,
        setMainProductInfo
    }}>
      <AddNewProductForm />

      <div className="w-[700px] lg:w-full">
        <DataTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Count</th>
              <th>Is Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <TableProductRow
                {...product}
                key={product.id}
                flag={flag}
                setFlag={setFlag}
              />
            ))}
          </tbody>
        </DataTable>
      </div>
    </ProductContext.Provider>
  );
}

import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import ProductImage from '../../components/product-details/ProductImage';
import ProductContent from '../../components/product-details/ProductContent';
import DetailsTab from '../../components/product-details/DetailsTab';
import RelatedProducts from '../../components/product-details/RelatedProducts';
import Facility from '../../components/shop-style-one/Facility';
import { getGymBranchData } from '../../services/gymService.js';

const Product = () => {
	const router = useRouter();
	const { id } = router.query;
	const product = useSelector((state) => state.products.find((item) => item.id === parseInt(id)));

	const products = useSelector((state) => state.products);
	const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare);

	const [branchData, setBranchData] = useState({});

	useEffect(() => {
        const { id } = router.query;
		async function getData(id) { console.log('id -> ',id)
            const branchData = await getGymBranchData(27);
            const { data: {data}} = branchData;
            console.log('DATA => ',data)
            setBranchData(data);
        }
        
        getData();
	}, []);

	return (
		<React.Fragment>
			<Navbar />
			<Breadcrumb title="Belted chino trousers polo" />

			<section className="products-details-area pt-60">
				<div className="container">
					<div className="row">
						<ProductImage />
						<ProductContent product={product} />
						<DetailsTab />
					</div>
				</div>

				<RelatedProducts products={products} CompareProducts={addedItemsToCompare} />

				<Facility />
			</section>

			<Footer />
		</React.Fragment>
	);
};

export default Product;

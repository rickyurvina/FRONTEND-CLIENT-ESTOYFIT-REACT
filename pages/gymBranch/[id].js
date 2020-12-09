import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/Layout/Navbar';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Footer from '../../components/Layout/Footer';
import Banner from './customComponents/Banner';
import Info from './customComponents/Info-gym';
import Pass from './customComponents/Pass';
import { getGymBranchData } from '../../services/gymService.js';
import Review from './customComponents/Review';
import Calendar from './customComponents/Calendar';

const Product = ({id}) => {
	const router = useRouter();
	// const { id } = router.query;
	const product = useSelector((state) => state.products.find((item) => item.id === parseInt(id)));

	const products = useSelector((state) => state.products);
	const addedItemsToCompare = useSelector((state) => state.addedItemsToCompare);
	const [branchData, setBranchData] = useState({});
	const [gallery, setGallery] = useState({});
	const [passes, setPasses] = useState({});
	const [review, setReview] = useState({});
	const [average, setAverage]=useState({});
	

	useEffect(() => {
		async function getData(id) {
			const branchData = await getGymBranchData(id);
			const {
				data: { data, gallery, passes, review, average },
			} = branchData;
			console.log('DATA => ', data, gallery, passes, review, average);
			setBranchData(data);
			setGallery(gallery);
			setPasses(passes);
			setReview(review);
			setAverage(average);

			
		}

		getData(id);
	}, []);

	return (
		<React.Fragment>
			<Navbar />
			<Banner infoGym={branchData} />
			<Pass passes={passes} />
			<Calendar/>
			<Info infoGym={branchData} gallery={gallery} />
			<Review  review={review} infoGym={branchData} average={average} />
			<Footer />
		</React.Fragment>
	);
};

Product.getInitialProps = async ({ query }) => {
	const { id } = query

	return { id }
}

export default Product;

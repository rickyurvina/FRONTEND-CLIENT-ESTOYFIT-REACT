import Link from 'next/link';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Router from 'next/router';

const AddToCart = (product) => {
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.isLogged);

    const handleAddToCart = (product) => {
        if (!isLogged) {
            Router.push("/login");
        } else {
            console.log('ANADIR A CARRITO ', product)
            const { id } = product;
            dispatch({
                type: 'ADD_TO_CART',
                id,
                product
            })

            toast.success('Añadido al carrito', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }

    }

    return (
        <Link href="#">
            <a
                className="btn btn-light"
                onClick={(e) => {
                    e.preventDefault(); handleAddToCart(product)
                }}
            >
                Añadir al carrito
            </a>
        </Link>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.isLogged,
    }
}


export default connect(
    mapStateToProps,
)(AddToCart)

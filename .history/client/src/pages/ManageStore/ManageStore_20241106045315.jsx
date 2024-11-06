import React from "react";
import { Heading } from "../../components/Components";
import { Link } from "react-router-dom";

const ManageStore = () => {
    const storeData = [
        {
            img: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo4.png",
            title: 'HRmart',
            description: ' Delivery by 6:15am Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa rem nemo soluta, libero veniam consectetur saepeaut doloribus aliquam architecto.',
            category: 'category'
        },
        {
            img: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo4.png",
            title: 'HRmart',
            description: ' Delivery by 6:15am Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa rem nemo soluta, libero veniam consectetur saepeaut doloribus aliquam architecto.',
            category: 'category'
        },
        {
            img: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo4.png",
            title: 'HRmart',
            description: ' Delivery by 6:15am Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa rem nemo soluta, libero veniam consectetur saepeaut doloribus aliquam architecto.',
            category: 'category'
        },
        {
            img: "https://wowtheme7.com/tf/marketpro/assets/images/thumbs/vendor-logo4.png",
            title: 'HRmart',
            description: ' Delivery by 6:15am Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur culpa rem nemo soluta, libero veniam consectetur saepeaut doloribus aliquam architecto.',
            category: 'category'
        },

    ]
    return (
        <div className=" w-full  px-4 md:px-8 lg:px-12 py-10">

            <Heading className={'mb-8'} title={'Manage Store'} sub1={'Home'} sub2={'My Store'} sub3={'Manage Store'} />
            {storeData.length == 0 ?
                <div className="w-full grid grid-cols-2 gap-10">

                    {storeData.map((store, i) => (
                        <div key={i} className="w-full max-w-lg mx-auto p-8 bg-green-100 rounded-2xl shadow-lg text-center relative">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                                <img
                                    src={store.img}
                                    alt="Nature Food Logo"
                                    className="w-12 h-12 object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{store.title}</h2>
                            <p className="text-gray-600 mb-4">
                                {store.description}
                            </p>
                            <div className="bg-orange-500 text-white font-semibold py-1 px-4 rounded-full inline-block mb-6">
                                {store.category}
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-2 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                            >
                                Manage Store
                            </button>
                        </div>
                    ))
                    }
                </div> :
                (
                    <div className="w-full flex flex-col items-center justify-center border-2">
                        <Link
                            to={'/Create-Store'}
                            type="submit"
                            className="w-[150px] px-6 py-2 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                        >
                            Create Store
                        </Link>
                    </div>
                )
            }


        </div>
    );
};

export default ManageStore;
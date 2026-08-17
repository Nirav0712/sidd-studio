import React from 'react';
import cvImage from '../../assets/label/CV.jpeg'; // Load from the root assets/label dir provided by user

const CVImageBanner = () => {
    return (
        <section className="bg-white py-8 md:py-16">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-24">
                <div className="w-full h-auto rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex justify-center items-center">
                    <img
                        src={cvImage}
                        alt="Design Portfolio Details"
                        className="w-full h-auto object-cover"
                        // Fallback in case path doesn't resolve in dev server perfectly
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/assets/label/CV.jpeg";
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default CVImageBanner;

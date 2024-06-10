import React from 'react';
import "./SecondSection.css"


export const SecondSection = () => {
    return (
        <div className='container mx-auto text-center writingPart'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div className=''>
                    <p className='textOne'>
                        LABRATUVAR TESTLİ ÜRÜNLER AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET
                        GARANTİSİ
                    </p>
                </div>
                <div>
                    <p className='textTwo'>
                        200.000'den fazla ürün yorumunuza dayanarak ürünlerimizi seveceğinize eminiz.
                        Eğer herhangi bir sebeple memnun kalmazsan, bizimle iletişime geçtiğinde çözüme kavuşturacağız.
                    </p>
                </div>
            </div>
        </div>
    );
};
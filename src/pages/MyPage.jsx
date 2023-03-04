import React from 'react';
import styled from 'styled-components';
import { PageMargin, HotelGridLayoutStyle } from '../utils/style/mixins';
import HotelElement from 'element/HotelElement';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        // 반응형
        responsive: [
            {
                breakpoint: 1630,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 905,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const listLength = 6;
    return (
        <MyPageContainer>
            <ListContainer>
                <ListTitle>
                    <h1>위시리스트</h1>
                </ListTitle>
                {listLength < 6 ? (
                    <ListBox>
                        <HotelElement />
                        <HotelElement />
                        <HotelElement />
                        <HotelElement />
                    </ListBox>
                ) : (
                    <SliderStyle {...settings}>
                        <HotelElement />
                        <HotelElement />
                        <HotelElement />
                        <HotelElement />
                        <HotelElement />
                        <HotelElement />
                    </SliderStyle>
                )}
            </ListContainer>

            <ListContainer>
                <ListTitle>
                    <h1>내가 예약한 숙소</h1>
                </ListTitle>
                <ListBox>
                    <HotelElement />
                    <HotelElement />
                    <HotelElement />
                    <HotelElement />
                    <HotelElement />
                </ListBox>
            </ListContainer>

            <ListContainer>
                <ListTitle>
                    <h1>내가 등록한 숙소</h1>
                </ListTitle>
                <ListBox>
                    <HotelElement />
                    <HotelElement />
                    <HotelElement />
                </ListBox>
            </ListContainer>
        </MyPageContainer>
    );
}

export default MyPage;

const MyPageContainer = styled.div`
    ${PageMargin};
`;
const ListContainer = styled.div`
    margin: 0px 40px;
`;

const ListTitle = styled.div`
    h1 {
        padding-top: 3rem;
        margin-bottom: 1.5rem;
        font-size: 3.2rem;
    }
`;
const ListBox = styled.div`
    ${HotelGridLayoutStyle}
`;

const SliderStyle = styled(Slider)`
    width: 98%;
    position: relative;
    .slick-prev::before,
    .slick-next::before {
        color: black;
    }
`;
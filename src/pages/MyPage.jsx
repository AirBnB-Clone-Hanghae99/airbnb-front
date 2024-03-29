import React, { useState } from 'react';
import styled from 'styled-components';
import { PageMargin, HotelGridLayoutStyle, flexColumnCenter } from '../utils/style/mixins';
import HotelElement from 'element/HotelElement';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getWishList, getRegistration, getReservation } from 'utils/api/api';
import { getCookie } from 'utils/cookie/cookie';
import { useQueries } from 'react-query';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { globalUserInfoState, isLoginModalState, isUserState } from 'store/atoms';
import { useNavigate } from 'react-router-dom';
import SkeletonHotelElement from '../element/SkeletonHotelElement';

function MyPage() {
    const navigate = useNavigate();
    const [wishList, setWishList] = useState([]);
    const [registList, setregistList] = useState([]);
    const [reserList, setreserList] = useState([]);
    const token = getCookie('token');
    const setIsUser = useSetRecoilState(isUserState);
    const resetInfo = useResetRecoilState(globalUserInfoState);
    const setIsLoginModal = useSetRecoilState(isLoginModalState);
    const profileQueries = useQueries([
        {
            queryKey: 'wish',
            queryFn: () => getWishList(token),
            onSuccess: ({ data }) => {
                setWishList(data.data);
            },
        },
        {
            queryKey: 'registration',
            queryFn: () => getRegistration(token),
            onSuccess: ({ data }) => {
                setregistList(data.data);
            },
        },
        {
            queryKey: 'reservation',
            queryFn: () => getReservation(token),
            onSuccess: ({ data }) => {
                setreserList(data.data);
            },
        },
    ]);
    const settings = {
        dots: true,
        infinite: wishList.length > 5 ? true : false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        slidesPerRows: 1,
        centerPadding: 0,
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
    return (
        <MyPageContainer>
            <ListContainer>
                <ListTitle>
                    <h1>위시리스트</h1>
                </ListTitle>
                {profileQueries[0].isLoading === true ? (
                    <ListBox>
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                    </ListBox>
                ) : profileQueries[0].isLoading === false && wishList.length === 0 ? (
                    <MessageBox>
                        <Message>위시리스트가 없습니다.</Message>
                    </MessageBox>
                ) : (
                    <SliderStyle {...settings}>
                        {wishList.map((list) => (
                            <HotelElement key={list.id} house={list} isWish={true} />
                        ))}
                    </SliderStyle>
                )}
            </ListContainer>

            <ListContainer>
                <ListTitle>
                    <h1>내가 등록한 숙소</h1>
                </ListTitle>
                {profileQueries[1].isLoading === true ? (
                    <SliderStyle {...settings}>
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                    </SliderStyle>
                ) : profileQueries[1].isLoading === false && registList.length === 0 ? (
                    <MessageBox>
                        <Message>등록한 숙소가 없습니다.</Message>
                    </MessageBox>
                ) : (
                    <SliderStyle {...settings}>
                        {registList.map((list) => (
                            <HotelElement made={true} key={list.id} house={list} />
                        ))}
                    </SliderStyle>
                )}
            </ListContainer>
            <ListContainer>
                <ListTitle>
                    <h1>내가 예약한 숙소</h1>
                </ListTitle>
                {profileQueries[2].isLoading === true ? (
                    <SliderStyle {...settings}>
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                        <SkeletonHotelElement />
                    </SliderStyle>
                ) : profileQueries[2].isLoading === false && reserList.length === 0 ? (
                    <MessageBox>
                        <Message>예약한 숙소가 없습니다.</Message>
                    </MessageBox>
                ) : (
                    <SliderStyle {...settings}>
                        {reserList.map((list) => (
                            <HotelElement key={list.id} house={list.house} />
                        ))}
                    </SliderStyle>
                )}
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
    margin-top: 7rem;
`;

const ListTitle = styled.div`
    h1 {
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
    .slick-track {
        margin: 0;
    }
`;

const MessageBox = styled.div`
    height: 100px;
    ${flexColumnCenter}
`;
const Message = styled.span`
    font-size: 1.5rem;
`;

import React, { useState } from "react";
import styled from "styled-components";
import useBookQuery from "./useBookQuery";
import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";

const Base = styled.div`
  align-items: center;
  margin: 0 auto;
  padding-top: 80px;
  width: 100%;
`;

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
`;

const Cart = styled.div`
  width: 75%;
`;
const Order = styled.div``;

const ListItem = styled.li`
  margin-top: 20px;
  display: flex;
  padding-top: 10px;
  border-top: 1px solid #dfdfdf;
`;

const ItemCheck = styled.div`
  padding: 10px;
`;

const ItemImg = styled.div``;

const ItemContent = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
`;

const ItemButton = styled.div`
  flex-shrink: 0;
  width: 135px;
  align-items: center;
`;

const SideListWrapper = styled.div``;

const SideList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

const MainList = styled.li`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 23px;
  font-weight: 700;
`;
const List = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: -0.01em;
  font-weight: 700;
`;

const PostWrapper = styled.div``;

const ListContainer = styled.ol`
  padding: 0;
`;

const Aside = styled.aside`
  flex: 2;
  padding: 10px;
`;
const OrderNo = styled.div`
  background-color: #fff;
  border: 0.05rem solid #fff;
  color: rgba(2, 29, 73, 0.5);
  border-radius: 6px;
  padding: 50px 10px;
  text-align: center;
`;
const Title = styled.div`
  margin: 0.8rem auto;
`;

const OrderYes = styled.div`
  border: 0.05rem solid #f6f6f6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const cart = [
  {
    title: "[국내도서] 원씽(The One Thing)(리커버 특별판)",
    price: 12600,
    sale: 10,
  },
  {
    title: "[국내도서] 원씽(The One Thing)(리커버 특별판)",
    price: 12600,
    sale: 10,
  },
];
const Mypage: React.FC = () => {
  const { data: bookItem, isLoading } = useBookQuery();

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <Base>
      <MainWrapper>
        <Cart>
          {isLoading ? (
            <div>
              <img
                src="images/bookLoader.gif"
                alt=""
                style={{ width: "300px" }}
              />
            </div>
          ) : (
            bookItem?.data.detail
              .slice(offset, offset + limit)
              .map(
                ({
                  id,
                  title,
                  overview,
                  poster_path,
                  release_date,
                  vote_average,
                }) => (
                  <ListItem key={id}>
                    <ItemCheck>
                      <FaRegCheckCircle color="#ccc" size="24px" />
                    </ItemCheck>
                    <ItemImg>
                      <StyledLink to={`/book/${id}`}>
                        <img
                          style={{ width: "140px" }}
                          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                          alt=""
                        />
                      </StyledLink>
                    </ItemImg>
                    <ItemContent>
                      <h3>
                        <StyledLink to={`/book/${id}`}>{title}</StyledLink>
                      </h3>
                      <p>{overview}</p>
                      <div>{release_date}</div>
                      <div>{vote_average}</div>
                    </ItemContent>
                    <ItemButton>
                      <button>장바구니</button>
                      <button>바로구매</button>
                    </ItemButton>
                  </ListItem>
                )
              )
          )}
        </Cart>
        <Order>
          <Aside>
            <OrderNo>
              <Title>아직 주문이 없어요</Title>
              <Title>+ 를 눌러 아이템을 추가해주세요</Title>
            </OrderNo>
          </Aside>
        </Order>
      </MainWrapper>
    </Base>
  );
};

export default Mypage;

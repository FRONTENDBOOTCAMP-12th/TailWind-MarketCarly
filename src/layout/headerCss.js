import { css } from 'lit';

export default css`
    .header {
        width: 100%;
        background: var(--white);
        box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;

        .header-inner {
            margin: 0 auto;
            max-width: 71.875rem;
            width: 100%;
            padding: 0 3.125rem;
        }

        .header-top {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0.75rem 0 1.25rem;
            column-gap: 1.5625rem;
            font-size: 0.75rem;

            & li {
                position: relative;
            }

            & li + li::before {
                content: '';
                display: block;
                position: absolute;
                left: -0.75rem;
                top: 50%;
                transform: translatey(-50%);
                width: 0.0625rem;
                height: 0.8125rem;
                background-color: #d9d9d9;
            }

            & a {
                text-decoration: none;
            }

            .sign-up {
                color: var(--primary);
            }

            .customer {
                padding-right: 0.75rem;
                background: url(/assets/ico-user-dropdown.png) right top 0.125rem / 0.5rem auto no-repeat;
            }
        }

        .header-middle {
            display: flex;
            align-items: center;

            .header-logo a {
                display: block;
                width: 5.125rem;
            }

            .karly-menu {
                display: flex;
                gap: 1.5625rem;
                margin: 0 3.9375rem 0 0.75rem;
                font-size: var(--heading--large);
                font-weight: 500;
                color: var(--gray--400);

                & li {
                    position: relative;
                }

                & li + li::before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: -0.75rem;
                    transform: translatey(-50%);
                    width: 0.0625rem;
                    height: 0.875rem;
                    background: #d9d9d9;
                }

                & li.active {
                    color: var(--primary);
                }

                & a {
                    text-decoration: none;
                }
            }

            .search-bar {
                position: relative;
                width: 25rem;

                .inp-search {
                    padding: 0.8125rem 3.125rem 0.8125rem 1.25rem;
                    width: 100%;
                    height: 3.75rem;
                    border: 1px solid var(--primary);
                    border-radius: 0.25rem;
                    font-size: var(--paragraph---medium);
                    font-weight: 400;

                    & ::placeholder {
                        color: var(--gray--400);
                    }
                }

                .btn-search {
                    position: absolute;
                    right: 1.25rem;
                    top: 50%;
                    transform: translatey(-50%);
                    padding: 0;
                    width: 2.25rem;
                    height: 2.25rem;
                    background-image: image-set(
                        url(/assets/ico-header-search.png),
                        url(/assets/ico-header-search1x.webp) 1x,
                        url(/assets/ico-header-search2x.webp) 2x
                    );
                    background-position: center;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-color: var(--color-white);
                    border: none;
                    cursor: pointer;
                }
            }

            .util-menu {
                display: flex;
                column-gap: 1.25rem;
                margin-left: auto;

                & li {
                    position: relative;
                }

                & li a {
                    display: block;
                    width: 2.25rem;
                    height: 2.25rem;
                }

                .cart-in {
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: block;
                    width: 0.8125rem;
                    height: 0.8125rem;
                    border-radius: 50%;
                    background: var(--accent--yellow);
                    color: var(--white);
                    font-size: 0.75rem;
                    line-height: 1.4;
                    font-weight: 600;
                    text-align: center;
                }
            }
        }

        .header-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 0.875rem;
            padding: 1rem 0;
            position: relative;

            .btn-category {
                padding-left: 1.75rem;
                border: none;
                font-size: var(--paragraph---medium);
                background-image: image-set(
                    url(/assets/ico-category-menu.png),
                    url(/assets/ico-category-menu1x.webp) 1x,
                    url(/assets/ico-category-menu2x.webp) 2x
                );
                background-position: left center;
                background-size: 1rem auto;
                background-repeat: no-repeat;
                background-color: var(--white);
                cursor: pointer;
            }

            .category-list {
                position: absolute;
                top: 100%;
                background-color: var(--white);
                /*호버를 하지 않았을 시엔 보이지 않게*/
                display: none;
                z-index: 3;
                border-inline: 1px solid var(--gray--100);
                /* 배경색과 메뉴바 배경색이 같아 경게를 위해 추가 */
                /* 추후 삭제 예정 */
            }

            .gnb-menu {
                display: flex;
                font-size: var(--paragraph---medium);

                & li {
                    padding: 0.5rem 0;
                    width: 9.375rem;
                    text-align: center;

                    & a {
                        text-decoration: none;
                    }
                }
            }

            .delivery-info {
                padding: 0.25rem 0.5rem 0.125rem 0.5rem;
                font-size: 0.75rem;
                border-radius: 1rem;
                border: 1px solid var(--gray--300);
                line-height: 1.6;
                text-decoration: none;

                & b {
                    color: var(--primary);
                    font-weight: 500;
                }
            }
        }

        /*카테고리 호버 스타일 */
        .header-bottom:hover {
            .category-list {
                display: block;
            }

            .btn-category {
                color: var(--primary);
            }
        }
    }
`;

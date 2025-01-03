import productHeaderStyle from './ProductHeaderStyle.js';
import '@/components/IncDecComponent/IncDecComponent.js';
import { fileUrl } from '@/api/PocketHost.js';
import resetCss from '@/styles/Reset.js';
import { LitElement, html } from 'lit';
import '@/components/Button/Button.js';
import '@/components/Bubble/Bubble.js';

class ProductHeader extends LitElement {
    static properties = {
        product: { type: Object, required: true },
        totalPrice: { type: Number, required: true },
        itemQuantity: { type: Number, required: true },
        isVisible: { type: Boolean, required: true },
        isLogin: { type: Boolean, required: true },
    };

    constructor() {
        super();
        this.totalPrice = 0;
        this.itemQuantity = 1;
        this.isVisible = false;
        this.isLogin = localStorage.getItem('pocketbase_auth');
    }

    static styles = [resetCss, productHeaderStyle];

    async connectedCallback() {
        super.connectedCallback();
        this.product = JSON.parse(localStorage.getItem('product'));
        this.totalPrice = this.itemQuantity * this.product.price;
    }

    handleChange(e) {
        this.itemQuantity = e.detail.itemQuantity;
        this.totalPrice = this.itemQuantity * this.product.price;
        this.requestUpdate();
    }

    handleAddToCart() {
        try {
            const cart = JSON.parse(localStorage.getItem('cartItems')) || {};
            cart[`${this.product.id}`] = this.itemQuantity;
            localStorage.setItem('cartItems', JSON.stringify(cart));
            this.isVisible = true;
        } catch (e) {
            this.isVisible = false;
            console.error(e);
        }
    }

    render() {
        return html`
            <div class="product-header">
                <img class="product-image" src="${fileUrl + this.product.id + '/' + this.product.main_image}" alt="${
                    this.product.name
                } 대표 이미지" />

                <div class="product-info-wrapper">
                    <div class="delivery-type">${this.product.delivery}</div>

                    <h1 class="product-title">${this.product.name}</h1>
                    <p class="product-subtitle">${this.product.description}</p>

                    <div class="product-price">${this.product.price.toLocaleString()}</div>

                    ${this.benefitCheck()}
                    <table class="product-info-table">
                        <tr>
                            <th>배송</th>
                            <td>
                                ${this.product.delivery}
                                <div class="sub-desc">23시 전 주문 시 내일 아침 7시 전 도착</div>
                            </td>
                        </tr>
                        <tr>
                            <th>판매자</th>
                            <td>${this.product.seller}</td>
                        </tr>
                        <tr>
                            <th>포장타입</th>
                            <td>${this.product.package_type}</td>
                        </tr>
                        <tr>
                            <th>판매단위</th>
                            <td>${this.product.unit}</td>
                        </tr>
                        <tr>
                            <th>중량/용량</th>
                            <td>${this.product.weight}</td>
                        </tr>
                        <tr>
                            <th>원산지</th>
                            <td>${this.product.origin}</td>
                        </tr>
                        <tr>
                            <th>알레르기정보</th>
                            <td>${this.product.allergy_info}</td>
                        </tr>
                        <tr>
                            <th>상품선택</th>
                            <td>
                                <div class="product-option-box">
                                    <div class="product-option-name">상품선택</div>
                                    <div class="product-option-value">
                                        <inc-dec-btn .itemQuantity=${this.itemQuantity} @quantity-change=${this.handleChange}></inc-dec-btn
                                        >${this.product.price.toLocaleString()}원
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div class="product-total-price-box">
                        <div class="product-total-price">총 상품 금액:<span>${this.totalPrice.toLocaleString()}</span>원</div>
                        ${this.benefitCheck()}
                    </div>
                    <div class="product-btn-box">
                        <c-button type="button" mode="outline">찜하기</c-button>
                        <c-button type="button" mode="outline">알림</c-button>
                        <c-button type="button" mode="fill" ?disabled=${this.totalPrice === 0} @click=${this.handleAddToCart}>장바구니 담기</c-button>
                        <c-bubble ?isVisible=${this.isVisible}>
                            <div class="bubble-content-box">
                                <img class="bubble-product-image" src="${fileUrl + this.product.id + '/' + this.product.main_image}" />
                                <div class="bubble-content">
                                    <p class="title">${this.product.name}</p>
                                    <p class="description">장바구니에 상품을 담았습니다.</p>
                                </div=>
                            </div>
                        </c-bubble>
                    </div>
                </div>
            </div>
        `;
    }

    benefitCheck() {
        if (this.isLogin) {
            return this.product.benefit ? html`<p class="delivery-info">${this.product.benefit}</p>` : html``;
        }
        return html`<p class="delivery-info">로그인 후, 적립 혜택이 제공됩니다.</p>`;
    }
}

customElements.define('product-header', ProductHeader);

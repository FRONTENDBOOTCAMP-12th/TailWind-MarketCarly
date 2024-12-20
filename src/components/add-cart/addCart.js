import { LitElement, html } from 'lit';
import addCartStyle from '@/components/add-cart/addCartStyle.js';
import reset from '@/styles/reset.js';

class AddCart extends LitElement {
    // resetCss가 정상적으로 적용된다면 js파일 분리 안할 예정(이건 상황에 따라 유동적으로 결정)
    static styles = [reset, addCartStyle];

    // 모달 오픈 여부, 제품 수량, 제품 가격, 제품 설명 변수(TODO : 모달제외 모두 Get 통신 예정)
    static properties = {
        isModalOpen: { type: Boolean },
        itemQuantity: { type: Number },
        productPrice: { type: Number },
        itemDesc: { type: String },
    };

    // 변수값 초기 설정
    constructor() {
        super();
        this.isModalOpen = false;
        this.itemQuantity = 0;
        this.productPrice = 4980;
        this.itemDesc = '[풀무원] 탱탱쫄면 (4개입)';
    }

    // TODO : 추후 컴포넌트 융합할 시 삭제 예정 이벤트
    handleTest() {
        this.isModalOpen = true;
    }

    // 취소 시 모달 창 닫는 이벤트
    handleCancel() {
        this.isModalOpen = false;
        this.itemQuantity = 0;
    }

    // 확인 시 모달 창 닫는 이벤트(TODO : 장바구니에 설정한 값을 저장)
    handleConfirm() {
        this.isModalOpen = false;
        console.log(this.itemQuantity);
        this.itemQuantity = 0;
        // TODO : 이후 상품을 추가하는 식을 사용
    }

    // + 버튼 클릭 시 제품 수량 증가
    // TODO : 컴포넌트 분리와 함께 addCart에선 제거 될 예정
    handleIncreaseItem() {
        this.itemQuantity++;
    }

    // - 버튼 클릭 시 제품 수량 감소
    // TOOD : 컴포넌트 분리와 함께 addCart에선 제거 될 예정
    handleDecreaseItem() {
        this.itemQuantity--;
    }

    render() {
        return html`
            <!-- isModalOpen에 따라 모달창 표시 -->
            <div class="add-cart  ${this.isModalOpen ? 'visible' : ''}">
                <div class="add-cart-container">
                    <section>
                        <h1 class="item-title">${this.itemDesc}</h1>
                        <div class="total-price-container">
                            <span class="item-price">${this.productPrice.toLocaleString()}원</span>
                            <span class="amount-container">
                                <!--만약 제품 수량이 1 미만이라면 - 버튼 비활성화-->
                                <!-- TODO : 컴포넌트 분리와 함께 사라질 예정(증감 컴포넌트) -->
                                <button
                                    type="button"
                                    class="minus-button"
                                    @click=${this.handleDecreaseItem}
                                    ?disabled=${this.itemQuantity < 1}
                                    aria-label="제품 수량 감소 버튼"
                                >
                                    <svg width="10" height="2" viewBox="0 0 10 2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0V2H0V0H10Z" fill="currentColor" />
                                    </svg>
                                </button>
                                <span class="sr-only">제품 수량</span>
                                <span class="item-amount">${this.itemQuantity}</span>
                                <button type="button" class="plus-button" @click=${this.handleIncreaseItem} aria-label="제품 수량 증가 버튼">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 0V4H10V6H6V10H4V6H0V4H4V0H6Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </section>
                    <section>
                        <div class="sum-container">
                            <h1 class="sum">합계</h1>
                            <!-- 제품 수량 * 제품 가격을 표시 -->
                            <div class="total-price">${(this.itemQuantity * this.productPrice).toLocaleString()} 원</div>
                        </div>
                        <div class="saving-container">
                            <span class="saving">적립</span>
                            <span class="saving-info">구매시 5원 적립</span>
                        </div>
                    </section>
                    <div class="add-confirm-container">
                        <button type="button" class="add-cancel" @click=${this.handleCancel} aria-label="취소 버튼">취소</button>
                        <button type="submit" class="add-confirm" @click=${this.handleConfirm} aria-label="제품 추가 버튼">장바구니 담기</button>
                    </div>
                </div>
            </div>
            <!-- 이후 삭제될 예정 -->
            <button type="button" class="test" @click=${this.handleTest}>모달 테스트</button>
        `;
    }
}

customElements.define('add-cart', AddCart);

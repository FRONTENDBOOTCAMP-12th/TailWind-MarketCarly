import { LitElement, html } from 'lit';
import resetCss from '@/styles/reset.js';
import registerCss from '@/pages/register/registerCss.js';

class Register extends LitElement {
    static get styles() {
        return [resetCss, registerCss];
    }

    render() {
        return html`<div class="register-container">
            <h2 class="register-title">회원가입</h2>
            <form action="" class="form-container">
                <hr class="top-line" />
                <p class="required-text"><b>*</b>필수입력사항</p>
                <span class="input-line">
                    <c-label required>아이디</c-label>
                    <c-input placeholder="아이디를 입력해주세요" classType="register"></c-input>
                    <c-button>중복확인</c-button>
                </span>
                <span class="input-line">
                    <c-label required>비밀번호</c-label>
                    <c-input placeholder="비밀번호를 입력해주세요" classType="register"></c-input>
                </span>
                <span class="input-line">
                    <c-label required>비밀번호 확인</c-label>
                    <c-input placeholder="비밀번호를 한번 더 입력해주세요" classType="register"></c-input>
                </span>
                <span class="input-line">
                    <c-label required>이름</c-label>
                    <c-input placeholder="이름을 입력해주세요" classType="register"></c-input>
                </span>
                <span class="input-line">
                    <c-label required>이메일</c-label>
                    <c-input placeholder="이메일" classType="register"></c-input>
                    <c-button>중복확인</c-button>
                </span>
                <span class="input-line">
                    <c-label required>휴대폰</c-label>
                    <c-input placeholder="숫자만 입력해주세요." classType="register"></c-input>
                    <c-button>인증번호 받기</c-button>
                </span>

                <span class="input-line">
                    <c-label required>주소</c-label>
                    <div class="address-container">
                        <c-button>인증번호 받기</c-button>
                        배송지에 따라 상품 정보가 달라질 수 있습니다.
                    </div>
                </span>
                <span class="input-line">
                    <c-label>성별</c-label>
                    <c-radio-group name="radio">
                        <c-radio id="radio1">남자</c-radio>
                        <c-radio id="radio2">여자</c-radio>
                        <c-radio id="radio3">선택안함</c-radio>
                    </c-radio-group>
                </span>
                <span class="input-line">
                    <c-label>생년월일</c-label>
                </span>
                <span class="input-line">
                    <c-label>추가입력 사항</c-label>
                    <c-radio-group name="radio">
                        <c-radio id="radio1">친구초대 추천인 아이디</c-radio>
                        <c-radio id="radio2">참여 이벤트명</c-radio>
                    </c-radio-group>
                </span>
            </form>

            <div class="terms-container">
                <c-label required>이용약관동의</c-label>
                <div class="check-container">
                    <span class="all-check">
                        <c-checkbox>
                            <div>
                                전체동의합니다
                                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다</p>
                            </div>
                        </c-checkbox>
                    </span>
                    <span class="part-check">
                        <c-checkbox>이용약관 동의(필수)</c-checkbox>
                        <p>약관보기</p>
                    </span>
                    <span class="part-check"
                        ><c-checkbox>개인정보 수집 · 이용 동의 (필수)</c-checkbox>
                        <p>약관보기</p></span
                    >
                    <span class="part-check"
                        ><c-checkbox>무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)</c-checkbox>
                        <p>약관보기</p></span
                    >
                    <span class="part-check"
                        ><c-checkbox>본인은 만 14세 이상입니다. (필수)</c-checkbox>
                        <p>약관보기</p></span
                    >
                </div>
            </div>

            <c-button type="submit" mode="fill" size="btn-md">가입하기</c-button>
        </div> `;
    }
}

customElements.define('c-register', Register);

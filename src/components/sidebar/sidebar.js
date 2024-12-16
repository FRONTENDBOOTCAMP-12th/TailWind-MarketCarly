import { LitElement, html } from 'lit';
import { SidebarStyles } from './popupStyle';
import resetStyles from '@/styles/reset.js';

class Sidebar extends LitElement {
    static styles = [resetStyles, SidebarStyles];

    render() {
        return html`
            <div id="app">
                <div class="sidebar">
                    <div class="scroll-up">▲</div>
                    <p>최근 본 상품</p>
                    <ul class="products">
                        <li><img src="/public/item1.png" alt="상품 이미지 1" /></li>
                        <li><img src="/public/item2.png" alt="상품 이미지 2" /></li>
                        <li><img src="/public/item1.png" alt="상품 이미지 3" /></li>
                    </ul>
                    <div class="scroll-down">▼</div>
                </div>
            </div>
        `;
    }
}

customElements.define('side-bar', Sidebar);
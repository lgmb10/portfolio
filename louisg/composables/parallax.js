import {abs} from "three/nodes";

/**
 *
 * @param {HTMLElement} element
 * @param {Number} acc
 */
export function offsetTop(element, acc = 0) {
    if (!element.offsetParent) {
        return offsetTop(element.offsetParent, acc + element.offsetTop)
    }
    return acc + element.offsetTop;
}

/**
 * @property {HTMLElement} element
 * @property {{y: number, variable: boolean, isMobileDisabled: boolean}} options
 */
export class Parallax {

    /**
     *
     * @param {HTMLElement} element
     */
    constructor(element) {
        this.element = element;
        this.options = this.parseAttribute();
        this.insideWindow = document.querySelector(".main_inside_wrapper");
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
        const observer = new IntersectionObserver(this.onIntersection);
        this.insideWindow.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onScroll);
        observer.observe(element);

        // Prevent offsetHeight issue on scrollTop 0
        this.insideWindow.scrollTop += 1;

        this.onScroll();
    }

    parseAttribute() {
        const defaultOptions = {
            y: 0.2,
            variable: false,
            isMobileDisabled: false,
            stopAtInitialPosition: false,
        }

        this.element.dataset.parallax = this.element.dataset.parallax.replaceAll("'", "\"");

        if (this.element.dataset.parallax.startsWith('{')) {
            return {...defaultOptions, ...JSON.parse(this.element.dataset.parallax)}
        }
        return {...defaultOptions, y: parseFloat(this.element.dataset.parallax)}

    }

    /**
     *
     * @param {IntersectionObserverEntry[]} entries
     */
    onIntersection = (entries) => {
        for (const entrie of entries) {
            if (entrie.isIntersecting) {
                //this.insideWindow.addEventListener('scroll', this.onScroll)
                //window.addEventListener('resize', this.onScroll);
            } else {
                //window.removeEventListener('resize', this.onScroll);
                //this.insideWindow.removeEventListener('scroll', this.onScroll);
            }
        }
    }

    onScroll = () => {
        if (!this.options.isMobileDisabled && window.innerWidth > 768) {
            this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
            const elementHeight = parseFloat(window.getComputedStyle(this.insideWindow, null).getPropertyValue("height"));
            const screenY = this.insideWindow.scrollTop + elementHeight / 2;
            const diffY = this.elementY - screenY;
            const translateY = diffY * -1 * this.options.y;

            if (this.options.variable) {
                if (this.options.stopAtInitialPosition) this.element.style.setProperty('--parallaxY', diffY <= 0 ? `0px` : `${translateY}px`);
                else this.element.style.setProperty('--parallaxY', `${translateY}px`);
            } else {
                if (this.options.stopAtInitialPosition) this.element.style.setProperty('transform', diffY <= 0 ? `translateY(0px)` : `translateY(${translateY}px)`);
                else this.element.style.setProperty('transform', `translateY(${translateY}px)`);
            }
        }else{
            if (this.options.variable) this.element.style.setProperty('--parallaxY', `0px`);
            else this.element.style.setProperty('transform', `translateY(0px)`);
        }
    }

    /**
     * @return {Parallax[]}
     */
    static bind() {
        Array.from(document.querySelectorAll('[data-parallax]')).map((element) => {
            return new Parallax(element);
        })
    }
}
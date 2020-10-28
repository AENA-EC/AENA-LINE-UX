/**
 * モーダルのセットアップを行う
 */
export default function setupModal() {
  /**
   * 画像の商品情報を操作するために取得したelementです。
   * @type {HTMLCollection}
   */
  const cardInfo = [...document.getElementsByClassName("c-card__btn")];

  /**
   * bodyタグの要素を操作するために取得したelementです。
   * @type {NodeList}
   */
  const body = document.querySelector("body");

  /**
   * モーダルの親要素を操作するために取得したelementです。
   * @type {NodeList}
   */
  const modalParent = document.querySelector(".c-modals");

  /**
  * 画像クリック時にモーダルを開きます。
  */
  cardInfo.forEach(cardBtn => {
    cardBtn.addEventListener('click', (e) => {
      // モーダルを表示する領域の準備
      modalParent.style.display = 'block';
      modalParent.style.top = `${window.pageYOffset}px`;
      body.classList.add('c-modalContainer--open');

      // モダールを表示するための処理
      const modalId = e.target.dataset.modalId;
      const modal = document.querySelector(`#${modalId}`);
      console.log(modal);
      modal.classList.add('c-modal--open');

      // モーダルのクリックイベントが親に伝搬しないための設定
      modal.addEventListener('click', (e) => {
        e.stopPropagation();
      });

      // 開いたモーダルを閉じるボタンで閉じるための設定
      const closeBtn = modal.querySelector('.c-modal__closeBtn');
      closeBtn.addEventListener("click", (_e) => {
        modalParent.style.display = 'none';
        body.classList.remove('c-modalContainer--open');
        modal.classList.remove('c-modal--open');
      })

      // 背景クリック時にモーダルを閉じる設定
      modalParent.addEventListener('click', (_e) => {
        modalParent.style.display = 'none';
        body.classList.remove('c-modalContainer--open');

        // 表示されているモーダルを非表示にする
        const modal = document.querySelector('.c-modal--open');
        modal.classList.remove('c-modal--open');
      });
    })
  });
}

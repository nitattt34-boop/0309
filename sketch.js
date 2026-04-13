function setup() {
  // 建立填滿視窗的畫布
  createCanvas(windowWidth, windowHeight);
  noStroke(); // 取消邊框讓漸層更柔和乾淨
}

function draw() {
  background(20); // 使用深色背景讓 HSB 色彩更突出

  // 採用 HSB 色彩模式：色相(0-360)，飽和度(0-100)，亮度(0-100)
  colorMode(HSB, 360, 100, 100); 

  // 設定圓形的間距，使用 max() 確保間距至少有 20，避免滑鼠在最左上角時當機
  let stepX = max(mouseX / 5, 20);
  let stepY = max(mouseY / 5, 20);

  // 1 & 2. 雙重迴圈：重複畫圓，並讓圓充滿全視窗
  for (let i = 0; i <= width; i += stepX) {
    
    // 3. HSB 漸層：將 X 座標映射到 0~360 的色相 (Hue) 範圍
    let h = map(i, 0, width, 0, 360);

    for (let j = 0; j <= height; j += stepY) {
      
      // 結合時間 (frameCount) 讓色彩動態流動，並加上 Y 座標變化產生斜向的漸層感
      let dynamicHue = (h + j + frameCount * 2) % 360;

      // 宣告顏色物件並設定透明度（呼應筆記中「留下痕跡」的層次感）
      let clr = color(dynamicHue, 80, 90);
      clr.setAlpha(0.7); 
      
      fill(clr);

      // 畫出圓形，大小隨著間距動態縮放
      ellipse(i, j, stepX * 0.8, stepY * 0.8);
    }
  }
}

// 當視窗大小改變時，畫布會自動適應
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
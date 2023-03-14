const path = require('path')
const { FFScene, FFText, FFVideo, FFAlbum, FFImage, FFCreator } = require("ffcreator");

// Create FFCreator instance
const creator = new FFCreator({
    width: 500,
    height: 680
});

// Create scene
const scene = new FFScene();
scene.setBgColor("#ffcc22");
scene.setDuration(6);
scene.setTransition("GridFlip", 2);
creator.addChild(scene);

const image = new FFImage({ path: path.join(__dirname, "./download123.png") });
image.setXY(250, 340);
image.setScale(2);
image.setWH(500, 680);
image.addEffect('fadeInDown', 1, 1);
scene.addChild(image);

// create Txt
const text = new FFText({
    text: 'welcome msft',
    x: 250,
    y: 80
  });
  text.setColor('#ffffff');
  text.setBackgroundColor('#b33771');
  text.addEffect('fadeInDown', 1, 1);
  text.alignCenter();
  text.setStyle({
    padding: [4, 12, 6, 12]
  });
  scene.addChild(text);



creator.output(path.join(__dirname, "./output/example.mp4"));
creator.start();        // start

creator.on('start', () => {
    console.log(`FFCreator start`);
});
creator.on('error', e => {
    console.log(`FFCreator error: ${JSON.stringify(e)}`);
});
creator.on('progress', e => {
    console.log(`FFCreator progress: ${e.state} ${(e.percent * 100) >> 0}%`);
});
creator.on('complete', e => {
    console.log(`FFCreator completed: \n USEAGE: ${e.useage} \n PATH: ${e.output} `);
});

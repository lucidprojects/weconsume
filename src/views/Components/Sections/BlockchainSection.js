import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import BlkTxs from "components/Blkdata/Blkdata.js";

import CoTwoInfo2 from 'components/CoTwoPlay/CoTwoPlay2';
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function BlockchainSection(props) {
  const classes = useStyles();

  console.log(props);

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
            <CoTwoInfo2/>
        <div className={classes.space50} />
        <div id="inputs">
          <div className={classes.title}>
            <h3>Consumption Blockchain</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              {/* hardcoded blockchain data while nodes are offline - js 20210519*/}
              {/* <BlkTxs /> */}
              {/* <div id="consume_msgs"></div> */}
              <div id="consume_msgs">
                <div> Consumption tracking paused while backend is updated - click through functionality limited.<br /><br /></div>
                <div><a href="https://iconsu.me/tx/32f6c5f7990c9f1d158d1a297d8881881f116d8cbdd2dcbb53d7622a7cdd08d3" target="_blank" className="blklink">5/19/2021 CO2e: 9.22kg the end for this iteration - 8+ weeks of quantification</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/8ed88c7dcea4c727d071efe3de43bcfebb55874ab759a083ab3eb1b9a308ee15" target="_blank" className="blklink">5/18/2021 CO2e: 14.58kg chaos and anxiety</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/e84993e2139ccad251fd81d9a038c58918d73e5b9d536413c525ba550447ffeb" target="_blank" className="blklink">5/17/2021 CO2e: 4.22kg only a few more but what's next</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/56f49247f5ecd84aa5d87bba88a967a407a2aaeda5579963eff266ac6bb43e93" target="_blank" className="blklink">5/16/2021 CO2e: 11.26kg a taxi ride over</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/b117aac8b8fb8f22780dc107f1b3bb2821d779316454413d606231933b4f212e" target="_blank" className="blklink">5/15/2021 CO2e: 4.82kg this iteration is coming to a close</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/a9f5ae9878075aa96e804e4672c8fabd3ef8156872d7f7c3db0c82621bb0d4c2" target="_blank" className="blklink">5/14/2021 CO2e: 17.42kg one must set goals and activate on them</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/bc5861ca9b74daf2c5398ed7e91dc1b659e2e6ab8ca18804cb33f025bee593fc" target="_blank" className="blklink">5/13/2021 CO2e: 7.76kg even if one's mpact may be small change matters</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/0a39058c348349bb0051b75cf1ac018a2e6844ec01b3ced4dfc40ad554c72392" target="_blank" className="blklink">5/12/2021 CO2e: 14.82kg consumption waste consumption waste how to change</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/bcfa328b7956728b30547bb32c921f3f52a410d96fbadd365f7b81b136ef338b" target="_blank" className="blklink">5/11/2021 CO2e: 4.31kg the way we live has an effect</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/7f8a6aca8ce497727ea7a46a871404af5cb71c6caab2a80261025ff9cd8c60bd" target="_blank" className="blklink">5/10/2021 CO2e: 20.44kg a drive alone is too much?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/1ea1c99d18916ffb9e6a7edf60e78207a528eee1a63957bdc71f9997ccdc01a8" target="_blank" className="blklink">5/9/2021 CO2e: 4.4kg change can be contagious</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/c4996a64df1afccd8a1758a43ba09bd48d27c8cbe85caa42131d4ea4b6d09200" target="_blank" className="blklink">5/8/2021 CO2e: 4.86kg how do we make and equitable future</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/bfeb85eb4f36dd46472e49ab9d3371538e1c327fdf1d2bad086bf786c8435be4" target="_blank" className="blklink">5/7/2021 CO2e: 7.49kg Last day of ITP classes</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/de0a88d36f5fbfd1dc840eb65ade2a2c80be64e139855ea0d6551b88ddbef011" target="_blank" className="blklink">5/6/2021 CO2e: 5.1kg slowly but surely time marches on</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/73b7057f52ab6fbbcd2e0802eb09034db271eadef866e175ae948ff9139afb1a" target="_blank" className="blklink">5/5/2021 CO2e: 14.22kg in what ways can we promote equality</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/8721836225431f3f81d0954578a6e03bae7f136d629951cc37e326f3a6bb955e" target="_blank" className="blklink">5/4/2021 CO2e: 5.15kg today is the day</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/8dd90e52265fc69dd60bd16cac1feab866f109c00517a57afd0c894549c91bfd" target="_blank" className="blklink">5/3/2021 CO2e: 6.54kg technical &amp; economic barriers breached - now politics</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/ae4f0590571f4a7b9b20bd009d0cf7908c872982c5277a6c9c19152bdee81203" target="_blank" className="blklink">5/2/2021 CO2e: 7.39kg learning to quantify oneself is intriguing</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/acd2ebb9e7cd885ee549c2bfb8f53db9f374649f0d1fc728bcced8558c9066aa" target="_blank" className="blklink">5/1/2021 CO2e: 5.37kg the world I leave for Jackson will be better</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/425ace92bcbe39f4c41d9a9957c762b3e5f21ddf69605fd42f00331617c7336c" target="_blank" className="blklink">4/30/2021 CO2e: 6.24kg Vax 2 - trains and consumption</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/1265ff94f46cf44ef37f88129fcc459148caa4cf6224d1188bfba343e3660520" target="_blank" className="blklink">4/29/2021 CO2e: 16.21kg need to learn how to live a zero waste life</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/38fe2d557874721bf8b0fbcd21f4c5e9d82bf9e8b01b22739a0a5df791e79cd3" target="_blank" className="blklink">4/28/2021 CO2e: 4.22kg minimal consumption day time to get vocal</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/af431f0f7939a7596be091e692e6d31399b58f5bcf45b3369010d139792840e1" target="_blank" className="blklink">4/27/2021 CO2e: 24.43kg more ml - what future am I making for my son?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/dc46f1ad5d81f1303336c58381626f064a5b35201e3a666ba82923510e10a438" target="_blank" className="blklink">4/26/2021 CO2e: 10.28kg change can be hard start small and it will grow</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/7ad0f6117548f6d9f6666b651842a659fe5ee55224d165a5f3a7912e5726a50c" target="_blank" className="blklink">4/25/2021 CO2e: 6.57kg travel - purchase - ml - too much?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/5deee33c6b781fda5cc1f239aeb13bfb61e62550243b7226e4b10870ef5e45c1" target="_blank" className="blklink">4/24/2021 CO2e: 3.73kg The final countdown</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/88c1e85cf57f0e360c37c91e482455e14ae9c296843b83abc01978728a32fc75" target="_blank" className="blklink">4/23/2021 CO2e: 13.73kg we need earth day action and motivation every day</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/d0428a9beabd3ef2580ea5f0919bcb99cb5a9063e1555010802c4ce6bf3f52a8" target="_blank" className="blklink">4/22/2021 CO2e: 6.25kg EARTH IS OUR PARTNER - NOT OUR RESOURCE. EARTHDAY</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/941a74e5147c8a847ea79c2db8ce40d8d65133bebaa4d25f5c0d6f0d503365e3" target="_blank" className="blklink">4/21/2021 CO2e: 56.14kg ml training backlog- approx 10kg per training</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/135495da4fe983bc313c47352912af7ec52cc87eac403626ad474ad8a3259d82" target="_blank" className="blklink">4/20/2021 CO2e: 11.07kg skate consumption waste - what future is generated?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/83d8d55113d5146e961d150f5febdbc68af27dda19a4f9b8eec84d37cd57b330" target="_blank" className="blklink">4/19/2021 CO2e: 8.58kg If we are conscious we can change</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/1ab5b62ccbb3c98ee3c01535b14745930b95275b7609b52aa99db9b757783860" target="_blank" className="blklink">4/18/2021 CO2e: 7.86kg our actions matter let's use them</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/37273c15552d58b98127ab9153af454faa7da526afa828e39a95c292bc35173f" target="_blank" className="blklink">4/17/2021 CO2e: 9.22kg we must find common ground and work together</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/ed36ca4e36191c94b29f5db3194a67b6f372e7a7f9948e78d7316029a135e788" target="_blank" className="blklink">4/16/2021 CO2e: 5.53kg to consume less there must be sacrifice</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/945aa188561d535dac03929daddf69eb2469f9428ca245bd68b6157dbaa1e48b" target="_blank" className="blklink">4/15/2021 CO2e: 37.28kg spending consuming waste - exceed goals too easily</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/00ed71c957926a0afda674886f9bd349993b5759c65899784df93fefb356f8da" target="_blank" className="blklink">4/14/2021 CO2e: 6.18kg What if everyone in the US went on a flight diet?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/cc22aa5ac13b305dffbcf9b8c018405deffb175cd6afcc8525a281ff8072eb44" target="_blank" className="blklink">4/13/2021 CO2e: 4.22kg the data is there. how do we make them look?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/89e92c605e055b9fc6fdfa2226e657d86cb8e10d1d718202320ae5b99f7efef1" target="_blank" className="blklink">4/12/2021 CO2e: 9.72kg progress progress progress</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/c0ce463592e2469350f48e40f71f3bb2b11875693864255250147b17c65fb836" target="_blank" className="blklink">4/11/2021 CO2e: 9.27kg 3 weeks in and a long way to go</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/d428e3feb4dcf767833d6e18bb7bde3e2d2b33c46b36af6355adb1e2c21da733" target="_blank" className="blklink">4/10/2021 CO2e: 4.22kg what does it take to make us all climate activists?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/13a95b5cb38f35df68f5cd9efd166514d6f47ed2dc81bfe3e1c1f0397f02f72f" target="_blank" className="blklink">4/9/2021 CO2e: 11.06kg heavy consumption how do we change?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/4d416d1bbc765f2530aa7caada3907e1bc71ece6812cb84484b854fd8e7c4cb1" target="_blank" className="blklink">4/8/2021 CO2e: 26.99kg utilities today</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/b424366eb69ac47df4aff02550f9736554c50a44d0ba5183d90cb3deb7cdde77" target="_blank" className="blklink">4/7/2021 CO2e: 7.06kg the time is now to revaluate your patterns</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/ccc50823eb61a11e29a763517fc2bd7e77cf9e122532c2fe0761a449107ffab6" target="_blank" className="blklink">4/6/2021 CO2e: 8.36kg Are we aware enough to change?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/a9dfa0642b29bfbfff975d29ccc959b1a98216650cba88dc621178a391808b03" target="_blank" className="blklink">4/5/2021 CO2e: 11.53kg purchase travel waste what is the threshold</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/1f18ee5c1546739db70e699e572ac10fbdee715e5d5e40b20a96f4b3df0bc498" target="_blank" className="blklink">4/4/2021 CO2e: 3.73kg repetition of consumption awareness</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/9712c6659256be8e0c1ec3f47b1ebd1567715b5560d7b5094e0e33ec868dd4a6" target="_blank" className="blklink">4/3/2021 CO2e: 4.33kg another day closer</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/12d98e1522e34827843dfee74505801d3706c4c042710c16ed94e42d10a03008" target="_blank" className="blklink">4/2/2021 CO2e: 7.03kg vax1 - travel, purchase</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/894814c7a3203cdb3a9755724fe5fc3fed58e4dff5363ab970629cbc4a8a3bb8" target="_blank" className="blklink">4/1/2021 1CO2e: 4.22kg waste is waste</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/01b06b8bd7ee70784ab1f0ecfe92bba757e8451f1ae633c9072fefa5a06a6945" target="_blank" className="blklink">3/31/2021 CO2e: 14.51kg how much does buying affects things</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/46b269c4d9971b3bbc6d664b802fdcfded2f25ce064f4dafd12a77abadb5950c" target="_blank" className="blklink">3/30/2021 CO2e: 4.22kg My repetitive reality. How to conserve but also LIVE?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/a27f88daa195c80304b8575d35447a598f58209569c276193597f62f4dad8028" target="_blank" className="blklink">3/29/2021 CO2e: 7.72kg Who are the climate activists?</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/8132d904b020a407d333da6c123c45493641afea6593bc362735709eac261acc" target="_blank" className="blklink">3/28/2021 CO2e: 4.38kg At times it is discouraging the sacrifice required</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/ea50cf5bbdab7a84922fc8f72792a93e457b77946e6329272942e4efa9c3e47a" target="_blank" className="blklink">3/27/2021 CO2e: 5.37kg If I can keep this up I may meet my goal.</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/a4bef31a31c61f14eb4489be4bbf37003dcf30fb7cced1f4f386aa5bb2672fdb" target="_blank" className="blklink">3/26/2021 CO2e: 9.22kg today was ok but still trying to gauge impact</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/aa3186448a314684dd9cdae71991f6f8f6ead676384611a370f511daa90e8b9c" target="_blank" className="blklink">3/25/2021 CO2e: 10.73kg I think days like this work</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/180143099d0895fc868ec92847522d91d7a23fc7f2faad6672ec4db717d67cba" target="_blank" className="blklink">3/24/2021 CO2e: 12.43kg Consumption low? Keep it up. Groceries expensive</a><hr className="style-three" /></div>
                <div><a href="https://iconsu.me/tx/530b913cc5cdee3d7e71864ab8290ba127d8211807a9e7783d5a33cd776bca86" target="_blank" className="blklink">3/23/2021 CO2e: 4.22kg Staying home allows for less consumption</a><hr className="style-three" /></div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
      </div>
    </div>
  );
}

# MinistryOfEmploymentAndLabor
 관공서 clone coding

2022-05-30 
Jquery를 최소한으로 사용하고 javascript만을 이용해서 할려고 하고 있다. swiper-slide, mcsb plug-in을 사용하여 슬라이더와 스크롤바를 구현했고 그 과정에서 swiper-slide가 2개의 요소를 따로따로 움직이려면 forEach문으로 이용해 구현해야 했었다. mcsb는 처음 써보는거라 구글링을 한고 시행착오를 격어 시간을 소모했지만 어떻게 사용 해야하는지에 대해서 확실하게 알았다.
Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive 이런 오류를 발견할 수 있었는데 eventHandler를 이용하지 않고 바로 mcsb를 이용하니 좀더 반응적으로 바꾸라는 경고문이 계속 console창에 떴다. 그래서 내가 어떤 버튼을 눌렀을 때 mscb를 사용하겠다고 구현을 하니 경고문이 사라졌다. 또 하나 배우게 되었던 하루.
swiper-slide에는 많은 method가 있다. 대표적으로 오늘 사용한 realIndex가 있는데 지금 실행되고 있는 slide의 index값을 반환해 준다. index는 0부터 시작이므로 pagenation을 구현할때 상당히 편리했다. 이게 아니었을 때는 슬라이드가 넘어갈때마다 임의의 변수를 ++해주었는데 상당한 오류가 있어서 아마 이게 없었더라면 이 오류를 풀려고 많은 시간을 썻을거같다.

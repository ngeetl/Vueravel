<template>
    <div class="map container mx-auto py-20 xl:px-60 min-h-fit flex-col justify-center items-center ">
        <div class="border border-t-gray-300 mb-6"></div>
        <div class="text-lg">
            <div class="mb-5">
                <div class="text-4xl font-sans font-thin"><span class="font-bold">SANDBURG</span> WORKSPACE</div>
                <div>
                    부산 최고의 근무지 Wework BIFC에서 근무합니다
                </div>
            </div>
            <!-- KAKAOMAP -->
            <div>
                <div id="map" class="w-full h-[25rem]"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'MapComponent',

    setup() {
        // 카카오 맵 API가 로드될 때까지 기다렸다가 맵을 초기화하는 함수
        const initializeMap = () => {
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };  

            // 지도를 생성합니다    
            var map = new kakao.maps.Map(mapContainer, mapOption); 

            // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
            var mapTypeControl = new kakao.maps.MapTypeControl();

            // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
            // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            // 주소-좌표 변환 객체를 생성합니다
            var geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch('부산광역시 남구 문현금융로 40', function(result, status) {

                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: `
                        <div class="top-3 text-xs w-60 p-4 font-bold">
                            <div class="text-sm mb-1">Wework BIFC</div>
                            <div>부산광역시 남구 전포대로 133, 14층 116호 샌드버그</div>
                        </div>
                         `
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                } 
            }); 
          
        };

        onMounted(() => {
            if (window.kakao && window.kakao.maps) {
                initializeMap();
            } else {
                // 카카오 맵 스크립트가 로드될 때까지 기다리는 이벤트 리스너
                const mapScript = document.createElement('script');
                mapScript.onload = () => initializeMap();
                mapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=e60513e31042d98c0889764ff58ba286'; // YOUR_APP_KEY에 실제 앱 키를 넣어야 합니다.
                document.head.appendChild(mapScript);
            }
        });
    }
}



</script>


<style scoped>

</style>
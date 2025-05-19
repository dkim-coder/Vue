<template>
  <div>
    <KakaoMap
      :lat="33.450701"
      :lng="126.570667"
      @onLoadKakaoMap="onLoadKakaoMap"
      width="100%"
      v-if="member.addresses?.length > 0"
    >
    </KakaoMap>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { KakaoMap } from 'vue3-kakao-maps'
const props = defineProps({
  member: Object,
})
const map = ref()
let bounds
const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef
  setMarkers(props.member.addresses)
}

const markers = ref([])
const setMarkers = (addresses) => {
  bounds = new kakao.maps.LatLngBounds()
  markers.value.forEach((m) => m.setMap(null))
  markers.value = []
  addresses.forEach((addr) => {
    let point = new kakao.maps.LatLng(addr.y, addr.x)
    let marker = new kakao.maps.Marker({ position: point })
    if (map.value !== undefined) {
      marker.setMap(map.value)
      marker.setTitle(addr.title)
    }
    markers.value.push(marker)
    bounds.extend(point)
  })
  map.value.setBounds(bounds)
}
</script>

<style scoped></style>

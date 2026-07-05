import request from '@/utils/request'

export function getBatchList(params) {
  return request.get('/lots', { params })
}

export function getBatchStatusStats() {
  return request.get('/lots/status-stats')
}

export function updateBatchStatus(id, status) {
  return request.put('/lots/status', null, { params: { id, status } })
}

export function getBatchDetail(id) {
  return request.get('/lots/detail', { params: { id } })
}

export function createBatch(data) {
  return request.post('/lots', data)
}

export function deleteBatch(id) {
  return request.delete(`/lots/${id}`)
}

export function lockBatch(id) {
  return request.put('/lots/status', null, { params: { id, status: 5 } })
}

export function unlockBatch(id) {
  return request.put('/lots/status', null, { params: { id, status: 2 } })
}

export function pauseBatch(id) {
  return request.put('/lots/status', null, { params: { id, status: 3 } })
}

export function resumeBatch(id) {
  return request.put('/lots/status', null, { params: { id, status: 2 } })
}

// ========== 生产中/可出站批次（进站操作用） ==========
// 获取生产中批次列表（用于进站操作）
export function getStationInList() {
  return request.get('/lots/station-in/list')
}

// 按批次号查询进站详情
export function getStationInDetail(lotCode) {
  return request.get('/lots/station-in/detail', { params: { lotCode } })
}

// 获取可出站批次列表（出站操作用）
export function getStationOutList() {
  return request.get('/lots/station-out/list')
}

// 按批次号查询出站详情
export function getStationOutDetail(lotCode) {
  return request.get('/lots/station-out/detail', { params: { lotCode } })
}

// 查询待上料批次列表（上料管理列表页用）
export function getPendingLoadingList() {
  return request.get('/lots/pending-loading/list')
}

// ========== 执行进站 ==========
// 执行进站（提交进站请求）
// 接口：POST /api/station-in
// 参数：{ lotId, equipmentId, operatorId, stationInQuantity, remark }
export function createStationIn(data) {
  return request.post('/station-in', data)
}

// ========== 执行出站 ==========
// 执行出站（提交出站请求）
// 接口：POST /api/station-out
// 参数：{ lotId, routeStepId, operatorId, finishedQuantity, defectQuantity, disposalType, disposalRemark, passRate, stationOutHandle }
export function createStationOut(data) {
  return request.post('/station-out', data)
}


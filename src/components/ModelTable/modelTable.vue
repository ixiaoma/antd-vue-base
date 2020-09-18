
<template>
  <div class="modelTable">
    <a-modal
      title="请选择"
      :visible="visible"
    >
        <a-card :bordered="false" v-if='!pageLoading'>
            <table-filter :filterList='filterList' @refresh='searchRefresh'/> 
            <s-table
                ref="table"
                rowKey="id"
                :columns="columns"
                :rowSelection="showSelect?rowSelection:null"
                :data="loadData"
                :scroll='{x:true}'/>
        </a-card>
    </a-modal>
  </div>
</template>

<script src="./modelTable.js"></script>
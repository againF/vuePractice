<template>
    <div>
        idArr:{{idArr}}
        <p @click="fire">触发</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            adContent: [
        {
          CampaignId: "13462507165",
          CampaignName: "搜索monkey英国1",
          CampaignStatus: "enabled",
          Cost: 0,
          AdGroupId: "120220658141",
          AdGroupName: "monkey",
          AdGroupStatus: "enabled",
          Id: "526910498582",
          Status: "disapproved",
          AdStatus: "enabled",
          CombinedApprovalStatus: "disapproved",
          PolicySummary: [
            "One website per ad group",
            "Malicious software",
            "Circumventing systems",
          ],
          AdType: "Expanded text ad",
          HeadlinePart1: "Monkey Supplier",
          HeadlinePart2: "Easy To Install.",
          ExpandedTextAdHeadlinePart3: "Cost Effective.",
          Description:
            "Export To 100+ Countries. Ready To Ship. Free Sample & Shipping. Get Quote Now.",
          ExpandedTextAdDescription2: "ISO9000, CE And Etc.",
          Path1: "",
          Path2: "",
          FinalUrl: "http://pages.linkjoint.com/product21f1962",
          DisplayUrl: "pages.linkjoint.com",
          order: 1,
        },
        {
          CampaignId: "13462507165",
          CampaignName: "搜索monkey英国1",
          CampaignStatus: "enabled",
          Cost: 0,
          AdGroupId: "120220658141",
          AdGroupName: "monkey",
          AdGroupStatus: "enabled",
          Id: "526910498579",
          Status: "disapproved",
          AdStatus: "enabled",
          CombinedApprovalStatus: "disapproved",
          PolicySummary: [
            "One website per ad group",
            "Malicious software",
            "Circumventing systems",
          ],
          AdType: "Expanded text ad",
          HeadlinePart1: "Monkey Wholesale",
          HeadlinePart2: "Easy To Install.",
          ExpandedTextAdHeadlinePart3: "Cost Effective.",
          Description:
            "Export To 100+ Countries. Ready To Ship. Free Sample & Shipping. Get Quote Now.",
          ExpandedTextAdDescription2: "ISO9000, CE And Etc.",
          Path1: "",
          Path2: "",
          FinalUrl: "http://pages.linkjoint.com/product21f1962",
          DisplayUrl: "pages.linkjoint.com",
          order: 1,
        },
        {
          CampaignId: "13462507165",
          CampaignName: "搜索monkey英国1",
          CampaignStatus: "enabled",
          Cost: 0,
          AdGroupId: "120220658141",
          AdGroupName: "monkey",
          AdGroupStatus: "enabled",
          Id: "526910498576",
          Status: "disapproved",
          AdStatus: "enabled",
          CombinedApprovalStatus: "disapproved",
          PolicySummary: [
            "One website per ad group",
            "Malicious software",
            "Circumventing systems",
          ],
          AdType: "Expanded text ad",
          HeadlinePart1: "Monkey Manufacturer",
          HeadlinePart2: "Easy To Install.",
          ExpandedTextAdHeadlinePart3: "Cost Effective.",
          Description:
            "Export To 100+ Countries. Ready To Ship. Free Sample & Shipping. Get Quote Now.",
          ExpandedTextAdDescription2: "ISO9000, CE And Etc.",
          Path1: "",
          Path2: "",
          FinalUrl: "http://pages.linkjoint.com/product21f1962",
          DisplayUrl: "pages.linkjoint.com",
          order: 1,
        },
        {
          CampaignId: "13462507165",
          CampaignName: "搜索monkey英国1",
          CampaignStatus: "enabled",
          Cost: 0,
          AdGroupId: "120220658141",
          AdGroupName: "monkey",
          AdGroupStatus: "enabled",
          Id: "526809155880",
          Status: "enabled",
          AdStatus: "enabled",
          CombinedApprovalStatus: "approved",
          PolicySummary: [],
          AdType: "Expanded text ad",
          HeadlinePart1: "Ying Furniture",
          HeadlinePart2: "Fashion Design & Customisable",
          ExpandedTextAdHeadlinePart3: "Durable",
          Description: "Low MOQ And High Quality",
          ExpandedTextAdDescription2: "",
          Path1: "",
          Path2: "",
          FinalUrl: "https://Www.linkjoint.cn",
          DisplayUrl: "Www.linkjoint.cn",
          order: 3,
        },
      ], // 顶部广告内容
      idArr: []
        }
    },
    methods: {
        fire() {
            this.getIdFromArr(this.adContent)
        },
        getIdFromArr(arr) {
            this.idArr = arr.map((item) => {
                return item.Id
            })
        }
    }
}
</script>
import { chromium } from "playwright"

async function main(){
    const brow = await chromium.launch({
        headless: false
    })
    //create a context session
    const cont = await brow.newContext()
    //open new page/tab
    const pg = await cont.newPage()

    //navigate to web
    await pg.goto('https://www.temu.com/bgt_order_checkout.html?source_channel=1&title=Finalizar%20compra&extend_map=%7B%22ck_cart_login_status%22%3A%221%22%2C%22cart_morgan_token%22%3A%227f300a54-a2c3-430a-88a7-1359c735b69f%22%2C%22amount_extend%22%3A%22%7B%5C%22parent_total_goods_amount%5C%22%3A1316%7D%22%2C%22cart_need_additional_order%22%3A0%7D&goods_list=%5B%7B%22goods_id%22%3A601099525434223%2C%22sku_id%22%3A17592255887364%2C%22goods_number%22%3A1%2C%22extend_map%22%3A%7B%22amount_extend%22%3A%22%7B%5C%22underline_price%5C%22%3A3159%2C%5C%22unit_price%5C%22%3A1316%7D%22%2C%22cart_data_type%22%3A%221%22%7D%7D%5D&refer_page_el_sn=203100&total_amount=S%2F%2013.16&goods_amount=1&_x_vst_scene=adg&_x_ads_sub_channel=shopping&_x_ns_prz_type=-1&_x_ns_sku_id=17592255887362&_x_ns_gid=601099525434223&_x_ads_channel=google&_x_gmc_account=5347776785&_x_login_type=Google&_x_ads_account=5724274225&_x_ads_set=22125822710&_x_ads_id=170742683742&_x_ads_creative_id=729124674230&_x_ns_source=g&_x_ns_gclid=Cj0KCQjw4cS-BhDGARIsABg4_J3PItETNERP1Pgc28-RE95v4Mg3tXTRsA_kOxOOkiRpume_UMgmSBUaAmQKEALw_wcB&_x_ns_placement=&_x_ns_match_type=&_x_ns_ad_position=&_x_ns_product_id=5347776785-17592255887362&_x_ns_target=&_x_ns_devicemodel=&_x_ns_wbraid=Cj4KCAjwvr--BhAIEi4AHeRKqYVXaKNNPdchFe2PeghS2IATVY-LveDu_d-jlSCr_QlE4X8zDBU-Vt1-GgKNyw&_x_ns_gbraid=0AAAAAo4mICH3Sms84NK5IoRoMbkxvIIes&_x_ns_targetid=pla-2386538019790&_x_sessn_id=1hjzs0ajwm&refer_page_name=goods&refer_page_id=10032_1741881420338_jh23n65s03&refer_page_sn=10032')
    await pg.waitForTimeout(10000)
    await brow.close()
}

main()
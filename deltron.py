import pytest,re
from playwright.sync_api import Page, expect


def test_has_title(page: Page):
    page.goto('https://www.deltron.com.pe/modulos/productos/items/postsql.php')

    expect(page).to_have_title(re.compile("Productos por tipo"))
    get_started = page.get_by_role("link", name="Notebook AMD Ryzen 5").click()
    get_started = page.get_by_role("link", name="LOGIN").click()


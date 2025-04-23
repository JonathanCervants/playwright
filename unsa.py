import pytest,re
from playwright.sync_api import Page, expect


def test_has_title(page: Page):
    page.goto('https://sisadmision.unsa.edu.pe/posgrado/register')

    expect(page).to_have_title(re.compile("POSGRADO"))
    get_started = page.get_by_placeholder("Ingrese su código").fill("77")
    
    get_started = page.get_by_id("fathername").fill("Cervantes")
    get_started = page.get_by_id("mothername").fill("Hipahuanca")
# locator = page.get_by_role("button", name="Sign in")

# locator.hover()
# locator.click()